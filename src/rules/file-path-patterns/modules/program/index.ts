import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type Program = (context: Context) => TSESLint.RuleFunction<TSESTree.Program>

export const program: Program = (context) => {
  // TODO: filename と正規表現をマッチングさせる処理を共通化できないか検討
  const { getFilename, options, report } = context

  const [{ allowPatterns }] = parseOption(options, optionsSchema)

  const fileName = getFilename()
  const isPartialMatched = allowPatterns.some((pattern) =>
    pattern.test(fileName),
  )

  return (node) => {
    if (isPartialMatched) return

    report({
      messageId: "NotMatched",
      node,
    })
  }
}
