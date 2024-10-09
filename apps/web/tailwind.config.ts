import {
  type Config,
  default as sharedConfig,
} from "@webry-monorepo-template/tailwind"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
