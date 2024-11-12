// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  compatibilityDate: "2024-10-01",
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Welcome",
      bodyAttrs: {
        class: "dark",
      },
    },
  },
  devtools: {
    enabled: false,
  },
  devServer: {
    port: 3000,
  },
})
