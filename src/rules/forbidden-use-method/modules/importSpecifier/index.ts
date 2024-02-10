import { parseOption } from "../../../../shared/utility/parseOption"
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

  const [{ allowPatterns, disallowPatterns, methods }] = parseOption(options, optionsSchema)

  const isDefinedAllowDisallow = allowPatterns && disallowPatterns
  const isNotDefinedPatterns = !allowPatterns && !disallowPatterns

  if (isDefinedAllowDisallow || isNotDefinedPatterns) {
    throw new Error("Define one property from allowPatterns or disallowPatterns.")
  }

  // eslint-disable-next-line complexity
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

    const {
      imported: { name },
    } = node

    console.log({ name })
    if (methods.find((method) => {
      const regExp
    })) return

    report({
      data: {
        hooksName: name,
      },
      messageId: "ImportedForbiddenMethod",
      node,
    })
  }
}
