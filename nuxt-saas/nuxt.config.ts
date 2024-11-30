import { app } from "./config/app.config"
import { fonts } from "./config/fonts.config"
import { security } from "./config/security.config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-security",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-auth-utils",
  ],
  runtimeConfig: {
    sessionPassword: "",
    authOrigin: "",
    oauthGoogleClientId: "",
    oauthGoogleClientPassword: "",
    oauthGithubClientId: "",
    oauthGithubClientPassword: "",
  },
  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: "noopener noreferrer",
        prefetch: true,
        prefetchOn: {
          interaction: true,
        },
        activeClass: "font-semibold",
      },
    },
  },
  typescript: {
    typeCheck: "build",
    tsConfig: {
      exclude: ["../service-worker"],
      vueCompilerOptions: {
        target: 3.5,
      },
    },
  },
  vue: {
    propsDestructure: true,
  },
  nitro: {
    preset: "node-server",
  },
  app,
  fonts,
  security,
})
