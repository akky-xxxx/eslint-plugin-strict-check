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

  const [{ allowPatterns, disallowPatterns }] = parseOption(
    options,
    optionsSchema,
  )

  const isBothDefined = allowPatterns && disallowPatterns
  const isNotDefined = !allowPatterns && !disallowPatterns
  if (isBothDefined || isNotDefined) {
    throw new Error(
      "Define the only one property, from allowPatterns or disallowPatterns.",
    )
  }

  // eslint-disable-next-line complexity, max-statements
  return (node) => {
    const fileName = getFilename()

    if (allowPatterns) {
      const isPartialMatched = allowPatterns.some((pattern) =>
        pattern.test(fileName),
      )
      if (isPartialMatched) return
    }

    if (disallowPatterns) {
      const isPartialMatched = disallowPatterns.some((pattern) =>
        pattern.test(fileName),
      )
      if (!isPartialMatched) return
    }

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
