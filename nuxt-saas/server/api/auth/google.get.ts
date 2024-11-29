export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user: { ...user, acctype: "Google" } })
    return sendRedirect(event, "/dashboard")
  },
})
