import { callExpression } from "./modules/callExpression"
import { importSpecifier } from "./modules/importSpecifier"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenUseMethod: TSESLint.RuleModule<MessageId, Option[]> =
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
        ImportedForbiddenMethod:
          "Don't import the method ( {{ hooksName }} ) in this file.",
        UsedForbiddenMethod:
          "Don't use the method ( {{ hooksName }} ) in this file.",
      },
      schema: {
        type: "array",
      },
      type: "problem",
    },
  }
