import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
  },
];
