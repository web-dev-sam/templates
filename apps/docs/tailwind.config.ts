import sharedConfig from "@webry-monorepo-template/tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["dark"],
  darkMode: "class",
  presets: [sharedConfig],
}

export default config
