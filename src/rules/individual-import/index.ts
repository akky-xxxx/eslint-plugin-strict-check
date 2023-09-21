import { callExpression } from "./modules/callExpression"
import { identifier } from "./modules/identifier"
import { jsxOpeningElement } from "./modules/jSXOpeningElement"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const individualImport: TSESLint.RuleModule<MessageId, Option[]> = {
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
      NotIndividually:
        'Import "{{ moduleName }}.{{ propertyName }}" as individually. example: import { {{propertyName}} } from "{{ lowerModuleName }}".',
    },
    schema: {
      type: "array",
    },
    type: "problem",
  },
}
