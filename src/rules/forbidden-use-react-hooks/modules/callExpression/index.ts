import { parseOption } from "../../../../shared/utility/parseOption"
import { PrefixRegExp } from "../../const/PrefixRegExp"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type CallExpression = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.CallExpression>

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
        data: {
          hooksName: name,
        },
        messageId: "UsedReactHooks",
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
      data: {
        hooksName: name,
      },
      messageId: "UsedReactHooks",
      node,
    })
  }
}
