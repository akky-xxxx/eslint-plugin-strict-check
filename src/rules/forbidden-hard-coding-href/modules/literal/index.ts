import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>

type Literal = (context: Context) => TSESLint.RuleFunction<TSESTree.Literal>

export const literal: Literal = (context) => {
  const { options, report } = context

  const [{ forbiddenValues }] = parseOption(options, optionsSchema)

  return (node) => {
    const { value } = node

    if (!forbiddenValues.includes(String(value))) return

    report({
      data: {
        href: value,
      },
      messageId: "HardCoded",
      node,
    })
  }
}
