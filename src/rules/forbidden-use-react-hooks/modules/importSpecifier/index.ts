import { parseOption } from "../../../../shared/utility/parseOption"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { optionsSchema } from "../../schema/optionSchema"
import { getErrorMessage } from "../getErrorMessage"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type ImportSpecifier = (
  context: Context,
) => RuleFunction<TSESTree.ImportSpecifier>

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
      message: getErrorMessage("import", name),
      node,
    })
  }
}
