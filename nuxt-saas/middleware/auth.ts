import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from "#imports"

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { loggedIn } = useUserSession()
  if (loggedIn.value) {
    if (to.path === "/auth/signin") {
      return navigateTo("/dashboard")
    }
    return
  }

  return navigateTo("/auth/signin")
})
