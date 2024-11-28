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
          "/fonts/CalSans/CalSansSemiBold.ttf",
          "/fonts/CalSans/CalSansSemiBold.woff",
          "/fonts/CalSans/CalSansSemiBold.woff2",
        ],
      },

      // If you're the author of this package, please make the documentation more clear with more examples or fix the library.
      {
        name: "Mona Sans 200",
        provider: "none",
        weight: "200",
        src: ["/fonts/MonaSans/mona-sans-200.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 300",
        provider: "none",
        weight: "300",
        src: ["/fonts/MonaSans/mona-sans-300.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 400",
        provider: "none",
        weight: "400",
        src: ["/fonts/MonaSans/mona-sans-400.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 500",
        provider: "none",
        weight: "500",
        src: ["/fonts/MonaSans/mona-sans-500.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 600",
        provider: "none",
        weight: "600",
        src: ["/fonts/MonaSans/mona-sans-600.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 700",
        provider: "none",
        weight: "700",
        src: ["/fonts/MonaSans/mona-sans-700.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 800",
        provider: "none",
        weight: "800",
        src: ["/fonts/MonaSans/mona-sans-800.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 900",
        provider: "none",
        weight: "900",
        src: ["/fonts/MonaSans/mona-sans-900.ttf"],
        style: "normal",
      },
      {
        name: "Mona Sans 200 Italic",
        provider: "none",
        weight: "200",
        src: ["/fonts/MonaSans/mona-sans-200-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 300 Italic",
        provider: "none",
        weight: "300",
        src: ["/fonts/MonaSans/mona-sans-300-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 400 Italic",
        provider: "none",
        weight: "400",
        src: ["/fonts/MonaSans/mona-sans-400-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 500 Italic",
        provider: "none",
        weight: "500",
        src: ["/fonts/MonaSans/mona-sans-500-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 600 Italic",
        provider: "none",
        weight: "600",
        src: ["/fonts/MonaSans/mona-sans-600-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 700 Italic",
        provider: "none",
        weight: "700",
        src: ["/fonts/MonaSans/mona-sans-700-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 800 Italic",
        provider: "none",
        weight: "800",
        src: ["/fonts/MonaSans/mona-sans-800-italic.ttf"],
        style: "italic",
      },
      {
        name: "Mona Sans 900 Italic",
        provider: "none",
        weight: "900",
        src: ["/fonts/MonaSans/mona-sans-900-italic.ttf"],
        style: "italic",
      },

      // {
      //   name: "Mona Sans",
      //   provider: "none",
      //   weights: ["200", "300", "400", "500", "600", "700", "800", "900"],
      //   src: [
      //     "/fonts/MonaSans/mona-sans-500.ttf",
      //     "/fonts/MonaSans/mona-sans-400.ttf",
      //     "/fonts/MonaSans/mona-sans-200.ttf",
      //     "/fonts/MonaSans/mona-sans-300.ttf",
      //     "/fonts/MonaSans/mona-sans-600.ttf",
      //     "/fonts/MonaSans/mona-sans-700.ttf",
      //     "/fonts/MonaSans/mona-sans-800.ttf",
      //     "/fonts/MonaSans/mona-sans-900.ttf",
      //     "/fonts/MonaSans/mona-sans-200-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-300-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-400-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-500-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-600-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-700-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-800-italic.ttf",
      //     "/fonts/MonaSans/mona-sans-900-italic.ttf",
      //   ],
      //   styles: ["normal", "italic"],
      // },
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
  nitro: {
    preset: "bun",
  },
})
