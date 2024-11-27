// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "nuxt-security",
    "@vite-pwa/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  typescript: {
    typeCheck: true,
    tsConfig: {
      exclude: ["../service-worker"],
      vueCompilerOptions: {
        target: 3.5,
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
  vue: {
    propsDestructure: true,
  },
  routeRules: {
    "/": { prerender: true },
    "/manifest.webmanifest": {
      headers: {
        "Content-Type": "application/manifest+json",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    },
  },
  app: {
    keepalive: true,
    head: {
      htmlAttrs: { lang: "en", class: "dark?" },
      viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
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
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "connect-src": ["'self'", "https:", "http:", "wss:", "ws:"],
        "font-src": ["'self'"],
        "form-action": ["'none'"],
        "frame-ancestors": ["'none'"],
        "frame-src": ["https:"],
        "img-src": ["'self'", "https:", "http:", "data:", "blob:"],
        "manifest-src": ["'self'"],
        "media-src": ["'self'", "https:", "http:"],
        "object-src": ["'none'"],
        "script-src": ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "'unsafe-inline'"],
        "upgrade-insecure-requests": true,
      },
      permissionsPolicy: {
        fullscreen: "*",
      },
    },
  },
  pwa: {
    mode: "production",
    scope: "/",
    srcDir: "./public",
    filename: "dev-sw.ts",
    strategies: "injectManifest",
    injectRegister: false,
    includeManifestIcons: false,
    manifest: false,
    injectManifest: {
      globPatterns: [
        "**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
      ],
      globIgnores: ["emojis/**", "manifest**.webmanifest"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})
