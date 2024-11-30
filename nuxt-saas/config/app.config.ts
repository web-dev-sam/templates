import type { DefineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export const app = {
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
} satisfies Parameters<DefineNuxtConfig>[0]["app"]
