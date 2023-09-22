import { callExpression } from "./modules/callExpression"
import { importSpecifier } from "./modules/importSpecifier"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenUseReactHooks: TSESLint.RuleModule<MessageId, Option[]> =
  {
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
        ImportedReactHooks:
          "Don't import the react hooks ( {{ hooksName }} ) in the component that only viewing.",
        UsedReactHooks:
          "Don't use the react hooks ( {{ hooksName }} ) in the component that only viewing.",
      },
      schema: {
        type: "array",
      },
      type: "problem",
    },
  }
