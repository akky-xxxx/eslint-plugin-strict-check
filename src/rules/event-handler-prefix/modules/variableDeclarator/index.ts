import { isNotApplicable } from "./modules/isNotApplicable"
import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionsSchema"

import type { Context } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

type VariableDeclarator = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.VariableDeclarator>

export const variableDeclarator: VariableDeclarator = (context) => {
  const { options, report } = context
  const [{ forbiddenPrefix }] = parseOption(options, optionsSchema)

  return (node) => {
    if (isNotApplicable(forbiddenPrefix)(node)) return

    const correctPrefix = forbiddenPrefix === "on" ? "handle" : "on"
    report({
      data: { correctPrefix, forbiddenPrefix },
      messageId: "forbiddenHandlerPrefix",
      // message: getMessage(forbiddenPrefix),
      node,
    })
  }
}
