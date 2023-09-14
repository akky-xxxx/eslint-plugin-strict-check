import { program } from "./modules/program"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const filePathPatterns: TSESLint.RuleModule<string, Option[]> = {
  create: (context) => {
    const identifierMain = program(context)
    return {
      Program: identifierMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {},
    schema: {},
    type: "problem",
  },
}
