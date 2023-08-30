import { FirstOption } from "../../../../const/FirstOption"
import { getNotHasOptionErrorMessage } from "../../../../shared/utility/getNotHasOptionErrorMessage"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { getErrorMessage } from "../getErrorMessage"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type CallExpression = (
  context: Context,
) => RuleFunction<TSESTree.CallExpression>

// eslint-disable-next-line complexity,max-statements
export const callExpression: CallExpression = (context) => (node) => {
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

  if (node.callee.type === "Identifier") {
    const {
      callee: { name },
    } = node

    if (!PrefixRegExp.test(name)) return

    report({
      message: getErrorMessage("use", name),
      node,
    })
    return
  }

  if (
    node.callee.type !== "MemberExpression" ||
    node.callee.property.type !== "Identifier"
  ) {
    return
  }

  const {
    callee: {
      property: { name },
    },
  } = node

  if (!PrefixRegExp.test(name)) return

  report({
    message: getErrorMessage("use", name),
    node,
  })
}
