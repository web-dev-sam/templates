export type GoogleUser = {
  acctype: "Google"
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  name: string
  picture: string
  sub: string
}

export type GithubUser = {
  acctype: "Github"
  login: string
  avatar_url: string
  gravatar_id: string
  type: string
  name: string
  email: string
}

declare module "#auth-utils" {
  interface User {
    acctype: "Github" | "Google"

    // Google
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    name: string
    picture: string
    sub: string

    // Github
    login: string
    avatar_url: string
    gravatar_id: string
    type: string
    name: string
    email: string
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}
