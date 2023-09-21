import { parseOption } from "../../../../shared/utility/parseOption"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type ImportSpecifier = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ImportSpecifier>

export const importSpecifier: ImportSpecifier = (context) => {
  // TODO: filename と正規表現をマッチングさせる処理を共通化できないか検討
  const { getFilename, options, report } = context

  const [{ allowPatterns }] = parseOption(options, optionsSchema)

  return (node) => {
    const fileName = getFilename()
    const isPartialMatched = allowPatterns.some((pattern) =>
      pattern.test(fileName),
    )

    if (isPartialMatched) return

    const {
      imported: { name },
    } = node

    if (!PrefixRegExp.test(name)) return

    report({
      data: {
        hooksName: name,
      },
      messageId: "ImportedReactHooks",
      node,
    })
  }
}
