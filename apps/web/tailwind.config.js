const baseConfig = require("@webry-monorepo-template/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  presets: [baseConfig],
}
