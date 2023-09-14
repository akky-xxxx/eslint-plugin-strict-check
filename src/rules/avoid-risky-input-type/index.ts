import { jsxOpeningElement } from "./modules/jsxOpeningElement"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const avoidRiskyInputType: TSESLint.RuleModule<string, Option[]> = {
  create: (context) => {
    const jsxOpeningElementMain = jsxOpeningElement(context)

    return {
      JSXOpeningElement: jsxOpeningElementMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      NoOption: "not specified option",
    },
    schema: {},
    type: "suggestion",
  },
}
