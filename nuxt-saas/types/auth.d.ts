declare module "#auth-utils" {
  interface User {
    name: string | null
    email: string | null // Unique identifier (can only have one account per email)
    email_verified: Date | null // Github defaults to false

    profile_picture: string | null // Github: avatar_url/gravatar_id, Google: picture
    user_name: string | null // Github: login, Google: null
  }

  interface UserSession {
    user: User
  }

  interface SecureSessionData {
    account_id: number
    github_id: number | null
    google_id: string | null
    provider: "Google" | "Github"
  }
}

export {} // Ensure this file is treated as a module
