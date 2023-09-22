// FIXME: resolve to eslint
// eslint-disable-next-line import/no-unresolved
import { RuleTester } from "@typescript-eslint/rule-tester"

export const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
})
