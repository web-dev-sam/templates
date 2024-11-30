import { usePostgres } from "~/server/utils/postgres"

// LOGGED IN: Update existing account
// TODO: In Settings, allow the user to link/unlink their Google account
// if (previousSessionAccount != null) {
//   await sql`
//     UPDATE accounts
//     SET
//       google_id = ${user.sub},
//       profile_picture = COALESCE(profile_image, ${user.picture}),
//       email = COALESCE(email, ${user.email}),
//       name = COALESCE(name, ${user.name}),
//     WHERE account_id = ${previousSessionAccount}
//   `

//   event.waitUntil(sql.end())
//   return sendRedirect(event, "/dashboard")
// }

export type GoogleOAuthUser = {
  /**
   * Unique identifier of the user
   */
  sub: string
  name: string
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: boolean
}

export type DBAccount = {
  account_id: number
  google_id: string | null
  github_id: number | null
  email: string | null
  email_verified: Date | null
  name: string | null
  user_name: string | null
  profile_picture: string | null
}

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }: { user: GoogleOAuthUser }) {
    const previousSession = await getUserSession(event)
    const previousSessionAccount = previousSession.secure?.account_id

    const sql = usePostgres()

    // Check if user is already logged in
    if (previousSessionAccount != null) {
      console.error("User cannot be logged in and try to login again!")
      return sendRedirect(event, "/dashboard", 500)
    }

    // Check if account already exists
    const existingAccountRedirect = await handleExistingGoogleAccount(event, sql, user)
    if (existingAccountRedirect !== false) {
      return existingAccountRedirect
    }

    // Create new account
    return await handleNewGoogleAccount(event, sql, user)
  },
})

async function handleNewGoogleAccount(
  event: Parameters<Parameters<typeof defineOAuthGoogleEventHandler>[0]["onSuccess"]>[0],
  sql: ReturnType<typeof usePostgres>,
  user: GoogleOAuthUser,
) {
  const [newAccount] = await sql`INSERT INTO accounts (
          google_id, 
          email, 
          email_verified, 
          name, 
          user_name, 
          profile_picture
        ) VALUES (
         ${user.sub},
         ${user.email},
         ${user.email_verified ? new Date() : null},
         ${user.name},
         ${null},
         ${user.picture}
      )
      RETURNING account_id`

  await setUserSession(event, {
    user: {
      email: user.email,
      email_verified: user.email_verified ? new Date() : null,
      name: user.name,
      user_name: null,
      profile_picture: user.picture,
    },
    secure: {
      account_id: newAccount.account_id,
      github_id: null,
      google_id: user.sub,
      provider: "Google",
    },
  })

  // Ensure the database connection is closed after the request is processed
  event.waitUntil(sql.end())
  return sendRedirect(event, "/dashboard")
}

async function handleExistingGoogleAccount(
  event: Parameters<Parameters<typeof defineOAuthGoogleEventHandler>[0]["onSuccess"]>[0],
  sql: ReturnType<typeof usePostgres>,
  user: GoogleOAuthUser,
) {
  const [existingAccount] = await sql<
    Pick<
      DBAccount,
      "account_id" | "github_id" | "email" | "email_verified" | "name" | "user_name" | "profile_picture"
    >[]
  >`
  SELECT account_id, email, email_verified, name, user_name, profile_picture
  FROM accounts
  WHERE google_id = ${user.sub}
`
  if (existingAccount) {
    await setUserSession(event, {
      user: {
        ...{
          // NEW OAUTH DATA
          email: user.email,
          email_verified: user.email_verified ? new Date() : null,
          name: user.name,
          user_name: null,
          profile_picture: user.picture,
        },
        ...{
          // EXISTING ACCOUNT DATA
          user_name: existingAccount.user_name,
          profile_picture: existingAccount.profile_picture,
          name: existingAccount.name,
          email: existingAccount.email,
          email_verified: existingAccount.email_verified,
        },
      },
      secure: {
        account_id: existingAccount.account_id,
        github_id: existingAccount.github_id,
        google_id: user.sub,
        provider: "Google",
      },
    })

    // Ensure the database connection is closed after the request is processed
    event.waitUntil(sql.end())
    return sendRedirect(event, "/dashboard")
  }
  return false
}
