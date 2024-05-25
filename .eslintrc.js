const { eslintRules } = require("./config/eslint/rules/eslintRules")
const { importRules } = require("./config/eslint/rules/importRules")
const { stylisticRules } = require("./config/eslint/rules/stylisticRules")
const {
  typescriptEslintRules,
} = require("./config/eslint/rules/typescriptEslintRules")

const { eslintOverrides } = require("./config/eslint/overrides/eslint")
const { stylisticOverrides } = require("./config/eslint/overrides/stylistic")

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@stylistic", "@typescript-eslint", "import"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb-base",
    "plugin:@stylistic/recommended-extends",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
  rules: {
    ...eslintRules,
    ...stylisticRules,
    ...typescriptEslintRules,
    ...importRules,
  },
  overrides: [...eslintOverrides, ...stylisticOverrides],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
}
