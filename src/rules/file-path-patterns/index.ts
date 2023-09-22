import { program } from "./modules/program"

import type { Option, MessageId } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const filePathPatterns: TSESLint.RuleModule<MessageId, Option[]> = {
  create: (context) => {
    const identifierMain = program(context)
    return {
      Program: identifierMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      NotMatched: "Not matched filename to pattern.",
    },
    schema: {
      type: "array",
    },
    type: "problem",
  },
}
