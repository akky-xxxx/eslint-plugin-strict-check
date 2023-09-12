import { checkIdentifier } from "./modules/checkIdentifier"
import { checkObjectPatten } from "./modules/checkObjectPattern"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const restrictUseOfProcessEnv: TSESLint.RuleModule<string, Option[]> = {
  create: (context) => {
    const checkIdentifierMain = checkIdentifier(context)
    const checkObjectPattenMain = checkObjectPatten(context)
    return {
      Identifier: checkIdentifierMain,
      ObjectPattern: checkObjectPattenMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      UsedProcessEnv:
        "using process.env is restricted, replace to allowed method",
    },
    schema: {},
    type: "problem",
  },
}
