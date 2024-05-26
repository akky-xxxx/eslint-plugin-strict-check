import { jsxOpeningElement } from "./modules/jsxOpeningElement"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const avoidRiskyInputType: TSESLint.RuleModule<MessageId, Option[]> = {
  create: (context) => {
    const jsxOpeningElementMain = jsxOpeningElement(context)

    return {
      JSXOpeningElement: jsxOpeningElementMain,
    }
  },
  defaultOptions: [],
  meta: {
    docs: {
      description: "",
    },
    messages: {
      riskyValue:
        "<input type=\"{{ inputType }}\" /> is risky. please rethink other type value.",
    },
    schema: {
      type: "array",
    },
    type: "suggestion",
  },
}
