import { literal } from "./modules/literal"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenHardCodingHref: TSESLint.RuleModule<
  MessageIdList,
  Option[]
> = {
  create: (context) => {
    const literalMain = literal(context)
    return {
      Literal: literalMain,
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
