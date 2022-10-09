import { jsxOpeningElement } from "./modules/jsxOpeningElement"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const avoidRiskyInputType: TSESLint.RuleModule<MessageIdList, Option[]> =
  {
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
