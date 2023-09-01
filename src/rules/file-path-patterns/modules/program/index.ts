import { FirstOption } from "../../../../const/FirstOption"
import { getNotHasOptionErrorMessage } from "../../../../shared/utility/getNotHasOptionErrorMessage"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type Program = (context: Context) => RuleFunction<TSESTree.Program>

// eslint-disable-next-line max-statements
export const program: Program = (context) => (node) => {
  // TODO: filename と正規表現をマッチングさせる処理を共通化できないか検討
  const { getFilename, options, report } = context

  const firstOption = options.at(FirstOption)

  if (!firstOption) {
    report({
      message: getNotHasOptionErrorMessage(),
      node,
    })
    return
  }

  const { allowPatterns } = firstOption

  if (!allowPatterns) {
    report({
      message: getNotHasOptionErrorMessage("allowPatterns"),
      node,
    })
    return
  }

  const fileName = getFilename()
  const isAllMatched = allowPatterns.every((pattern) => pattern.test(fileName))

  if (isAllMatched) return

  report({
    message: "Not matched filename to pattern.",
    node,
  })
}
