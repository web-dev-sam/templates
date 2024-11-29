export default defineOAuthGitHubEventHandler({
  config: {
    scope: ["read:user", "user:email"],
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, { user: { ...user, acctype: "Github" } })
    return sendRedirect(event, "/dashboard")
  },
})
