import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type Program = (context: Context) => RuleFunction<TSESTree.Program>

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
      message: "Not matched filename to pattern.",
      node,
    })
  }
}
