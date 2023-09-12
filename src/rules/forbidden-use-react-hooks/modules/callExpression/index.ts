import { parseOption } from "../../../../shared/utility/parseOption"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { optionsSchema } from "../../schema/optionSchema"
import { getErrorMessage } from "../getErrorMessage"

import type { Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<string, readonly Option[]>>
type CallExpression = (
  context: Context,
) => RuleFunction<TSESTree.CallExpression>

export const callExpression: CallExpression = (context) => {
  // TODO: filename と正規表現をマッチングさせる処理を共通化できないか検討
  const { getFilename, options, report } = context

  const [{ allowPatterns }] = parseOption(options, optionsSchema)

  // eslint-disable-next-line complexity, max-statements
  return (node) => {
    const fileName = getFilename()
    const isPartialMatched = allowPatterns.some((pattern) =>
      pattern.test(fileName),
    )

    if (isPartialMatched) return

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
}
