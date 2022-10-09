import { callExpression } from "./modules/callExpression"
import { identifier } from "./modules/identifier"
import { jsxOpeningElement } from "./modules/jSXOpeningElement"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const individualImport: TSESLint.RuleModule<MessageIdList, Option[]> = {
  create: (context) => {
    const callExpressionMain = callExpression(context)
    const identifierMain = identifier(context)
    const jsxOpeningElementMain = jsxOpeningElement(context)
    return {
      CallExpression: callExpressionMain,
      Identifier: identifierMain,
      JSXOpeningElement: jsxOpeningElementMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      NoOption: "not specified option",
    },
    schema: {},
    type: "problem",
  },
}
