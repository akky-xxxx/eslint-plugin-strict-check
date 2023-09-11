// import { FirstOption } from "../../../../const/FirstOption"
import { FirstOption } from "../../../../const/FirstOption"
import { getNotHasOptionErrorMessage } from "../../../../shared/utility/getNotHasOptionErrorMessage"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { getErrorMessage } from "../getErrorMessage"
// import { hasTarget } from "../hasTarget"

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

  const firstOption = options.at(FirstOption)

  if (!firstOption) {
    throw new Error(getNotHasOptionErrorMessage())
  }

  const { allowPatterns } = firstOption

  if (!allowPatterns) {
    throw new Error(getNotHasOptionErrorMessage("allowPatterns"))
  }

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
