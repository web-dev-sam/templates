declare module "#auth-utils" {
  interface User {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    name: string
    picture: string
    sub: string
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
