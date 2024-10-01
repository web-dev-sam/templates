module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `config-eslint`
  extends: ['@webry-monorepo-template/config-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
