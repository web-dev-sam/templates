/** @type {import("prettier").Config} */
export default {
  semi: false,
  tabWidth: 2,
  singleQuote: false,
  printWidth: 120,
  trailingComma: "all",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  vueIndentScriptAndStyle: false,
  overrides: [
    {
      files: ["*.vue"],
      options: {
        parser: "vue",
      },
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
}
