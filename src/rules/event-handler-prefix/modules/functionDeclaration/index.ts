import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionsSchema"

import type { Context } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

type FunctionDeclaration = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.FunctionDeclaration>

export const functionDeclaration: FunctionDeclaration = (context) => {
  const { options, report } = context
  const [{ forbiddenPrefix }] = parseOption(options, optionsSchema)

  return (node) => {
    if (!node.id?.name.startsWith(forbiddenPrefix)) return
    const correctPrefix = forbiddenPrefix === "on" ? "handle" : "on"
    report({
      data: { correctPrefix, forbiddenPrefix },
      messageId: "forbiddenHandlerPrefix",
      node,
    })
  }
}
