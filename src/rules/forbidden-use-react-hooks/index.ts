import { callExpression } from "./modules/callExpression"
import { importSpecifier } from "./modules/importSpecifier"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenUseReactHooks: TSESLint.RuleModule<string, Option[]> = {
  create: (context) => {
    const callExpressionMain = callExpression(context)
    const identifierMain = importSpecifier(context)
    return {
      CallExpression: callExpressionMain,
      ImportSpecifier: identifierMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      UsedReactHooks:
        "Don't use / import the react hooks in the component that the only viewing.",
    },
    schema: {},
    type: "problem",
  },
}
