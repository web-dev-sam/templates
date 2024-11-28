import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from "#imports"

export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession()
  if (!loggedIn.value) {
    return navigateTo("/")
  }
})
