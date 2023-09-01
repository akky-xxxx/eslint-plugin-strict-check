import { program } from "./modules/program"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const filePathPatterns: TSESLint.RuleModule<MessageIdList, Option[]> = {
  create: (context) => {
    const identifierMain = program(context)
    return {
      Program: identifierMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      NotMatchedPatterns: "Not matched filename to pattern.",
    },
    schema: {},
    type: "problem",
  },
}
