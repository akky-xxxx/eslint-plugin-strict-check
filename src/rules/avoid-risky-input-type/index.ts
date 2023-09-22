// FIXME: resolve to eslint
// eslint-disable-next-line import/no-unresolved
import { ESLintUtils } from "@typescript-eslint/utils"

import { jsxOpeningElement } from "./modules/jsxOpeningElement"

import type { MessageId, Option } from "./types"

const createRule = ESLintUtils.RuleCreator((name) => name)

export const avoidRiskyInputType = createRule<Option[], MessageId>({
  name: "",

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
        '<input type="{{ inputType }}" /> is risky. please rethink other type value.',
    },
    schema: {
      type: "array",
    },
    type: "suggestion",
  },
})
