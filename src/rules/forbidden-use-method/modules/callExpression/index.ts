import { parseOption } from "../../../../shared/utility/parseOption"
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

  const [{ allowPatterns, disallowPatterns, methods }] = parseOption(options, optionsSchema)

  const isDefinedAllowDisallow = allowPatterns && disallowPatterns
  const isNotDefinedPatterns = !allowPatterns && !disallowPatterns

  if (isDefinedAllowDisallow || isNotDefinedPatterns) {
    throw new Error("Define one property from allowPatterns or disallowPatterns.")
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

      if (methods.includes(name)) return

      report({
        data: {
          hooksName: name,
        },
        messageId: "UsedForbiddenMethod",
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

    if (methods.includes(name)) return

    report({
      data: {
        hooksName: name,
      },
      messageId: "UsedForbiddenMethod",
      node,
    })
  }
}
