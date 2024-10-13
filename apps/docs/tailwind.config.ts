import {
  type Config,
  default as sharedConfig,
} from "@webry-monorepo-template/tailwind"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [sharedConfig],
}

export default config
