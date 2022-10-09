import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint"

export const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
})
