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
  app: {
    keepalive: true,
    head: {
      htmlAttrs: { lang: "en", class: "dark?" },
      viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/png", href: "/logo.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      // TODO: Add meta tags
      meta: [
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { property: "og:title", content: "" },
        { property: "og:description", content: "" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "" },
        { property: "og:image:width", content: "200" },
        { property: "og:image:height", content: "150" },
        { property: "og:site_name", content: "" },
        { name: "twitter:site", content: "" },
        { name: "twitter:card", content: "" },
      ],
    },
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
  fonts: {
    families: [
      {
        name: "Cal Sans",
        provider: "none",
        src: [
          "/fonts/CalSansSemiBold.ttf",
          "/fonts/CalSansSemiBold.woff",
          "/fonts/CalSansSemiBold.woff2",
        ],
      },
      {
        name: "Mona Sans",
        provider: "google",
      },
    ],
  },
  typescript: {
    typeCheck: true,
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
  security: {
    nonce: true,
    csrf: true,
    hidePoweredBy: true,
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "lh3.googleusercontent.com"],
      },
      permissionsPolicy: {
        fullscreen: "*",
      },
    },
  },
})
