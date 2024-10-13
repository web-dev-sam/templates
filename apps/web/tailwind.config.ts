import {
  type Config,
  default as sharedConfig,
} from "@webry-monorepo-template/tailwind"

const config: Config = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
