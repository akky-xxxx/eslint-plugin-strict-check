import { isNotApplicable } from "./modules/isNotApplicable"
import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionsSchema"
import { getMessage } from "../getMessage"

import type { Context } from "../../types"
import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"

type VariableDeclarator = (
  context: Context,
) => RuleFunction<TSESTree.VariableDeclarator>

export const variableDeclarator: VariableDeclarator = (context) => {
  const { options, report } = context
  const [{ forbiddenPrefix }] = parseOption(options, optionsSchema)

  return (node) => {
    if (!options.length) {
      report({
        messageId: "NoOption",
        node,
      })
      return
    }

    if (isNotApplicable(forbiddenPrefix)(node)) return

    report({
      message: getMessage(forbiddenPrefix),
      node,
    })
  }
}
