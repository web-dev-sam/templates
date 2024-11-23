import antfu from "@antfu/eslint-config"

export default antfu({
  vue: true,
  formatters: false,
  rules: {
    "style/quotes": ["error", "double"],
    "vue/singleline-html-element-content-newline": "off",
  },
})
