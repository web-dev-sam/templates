import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), vue()],
  server: { port: 3001 },
})
