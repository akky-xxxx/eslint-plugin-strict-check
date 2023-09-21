import { literal } from "./modules/literal"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenHardCodingHref: TSESLint.RuleModule<MessageId, Option[]> =
  {
    create: (context) => {
      const literalMain = literal(context)
      return {
        Literal: literalMain,
      }
    },
    defaultOptions: [],
    meta: {
      messages: {
        HardCoded:
          "Don't hard code {{ href }}, replace to designated constant or function.",
      },
      schema: {
        type: "array",
      },
      type: "problem",
    },
  }
