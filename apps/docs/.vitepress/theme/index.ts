import type { Theme } from "vitepress"
import Layout from "./Layout.vue"
import "./style.css"

// https://vitepress.dev/guide/custom-theme
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
