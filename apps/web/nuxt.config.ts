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
      bodyAttrs: {
        class: "dark",
      },
    },
  },
})
