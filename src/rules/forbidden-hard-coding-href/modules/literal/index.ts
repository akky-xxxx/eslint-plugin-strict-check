import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageIdList, Option } from "../../types"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"
import type { RuleContext } from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>

type Literal = (context: Context) => RuleFunction<TSESTree.Literal>

export const literal: Literal = (context) => {
  const { options, report } = context

  const [{ forbiddenValues }] = parseOption(options, optionsSchema)

  return (node) => {
    const { value } = node

    if (!options.length) {
      report({
        messageId: "NoOption",
        node,
      })
      return
    }

    if (!forbiddenValues.includes(String(value))) return

    report({
      message: `don't hard code "${String(
        value,
      )}", replace to designated constant or function`,
      node,
    })
  }
}
