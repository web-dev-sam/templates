import type { DBAccount } from "./google.get" // Properly handle DB data types (Add Drizzle?)
import { usePostgres } from "~/server/utils/postgres"

export type GitHubOAuthUser = {
  /**
   * Unique identifier of the user
   */
  id: number
  /**
   * Actual name
   */
  name: string | null
  /**
   * Username
   */
  login: string
  email: string | null
  avatar_url: string | null
}

export default defineOAuthGitHubEventHandler({
  config: {
    scope: ["user:email"],
  },
  async onSuccess(event, { user }: { user: GitHubOAuthUser }) {
    const previousSession = await getUserSession(event)
    const previousSessionAccount = previousSession.secure?.account_id

    const sql = usePostgres()

    // Check if user is already logged in
    if (previousSessionAccount != null) {
      console.error("User cannot be logged in and try to login again!")
      return sendRedirect(event, "/dashboard", 500)
    }

    // Check if account already exists
    const existingAccountRedirect = await handleExistingGitHubAccount(event, sql, user)
    if (existingAccountRedirect !== false) {
      return existingAccountRedirect
    }

    // Create new account
    return await handleNewGitHubAccount(event, sql, user)
  },
})

async function handleNewGitHubAccount(
  event: Parameters<Parameters<typeof defineOAuthGitHubEventHandler>[0]["onSuccess"]>[0],
  sql: ReturnType<typeof usePostgres>,
  user: GitHubOAuthUser,
) {
  const [newAccount] = await sql`
    INSERT INTO accounts (
      github_id, 
      email, 
      name, 
      user_name, 
      profile_picture
    ) VALUES (
      ${user.id},
      ${user.email},
      ${user.name},
      ${user.login},
      ${user.avatar_url}
    )
    RETURNING account_id
  `

  await setUserSession(event, {
    user: {
      email: user.email,
      email_verified: null, // GitHub doesn't provide email verification status
      name: user.name,
      user_name: user.login,
      profile_picture: user.avatar_url,
    },
    secure: {
      account_id: newAccount.account_id,
      github_id: user.id,
      google_id: null,
      provider: "Github",
    },
  })

  event.waitUntil(sql.end())
  return sendRedirect(event, "/dashboard")
}

async function handleExistingGitHubAccount(
  event: Parameters<Parameters<typeof defineOAuthGitHubEventHandler>[0]["onSuccess"]>[0],
  sql: ReturnType<typeof usePostgres>,
  user: GitHubOAuthUser,
) {
  const [existingAccount] = await sql<
    Pick<
      DBAccount,
      "account_id" | "google_id" | "email" | "email_verified" | "name" | "user_name" | "profile_picture"
    >[]
  >`
    SELECT account_id, google_id, email, email_verified, name, user_name, profile_picture
    FROM accounts
    WHERE github_id = ${user.id}
    LIMIT 1
  `

  if (existingAccount) {
    await setUserSession(event, {
      user: {
        ...{
          // NEW OAUTH DATA
          email: user.email,
          email_verified: null,
          name: user.name,
          user_name: user.login,
          profile_picture: user.avatar_url,
        },
        ...{
          // EXISTING ACCOUNT DATA
          email: existingAccount.email,
          email_verified: existingAccount.email_verified,
          name: existingAccount.name,
          user_name: existingAccount.user_name,
          profile_picture: existingAccount.profile_picture,
        },
      },
      secure: {
        account_id: existingAccount.account_id,
        github_id: user.id,
        google_id: existingAccount.google_id,
        provider: "Github",
      },
    })

    event.waitUntil(sql.end())
    return sendRedirect(event, "/dashboard")
  }
  return false
}
