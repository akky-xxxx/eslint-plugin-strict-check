import { isNotApplicable } from "./modules/isNotApplicable"
import { FirstOption } from "../../../../const/FirstOption"
import { getMessage } from "../getMessage"

import type { Context } from "../../types"
import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"

type VariableDeclarator = (
  context: Context,
) => RuleFunction<TSESTree.VariableDeclarator>

export const variableDeclarator: VariableDeclarator = (context) => (node) => {
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  const { forbiddenPrefix } = options[FirstOption]
  if (isNotApplicable(forbiddenPrefix)(node)) return

  report({
    message: getMessage(forbiddenPrefix),
    node,
  })
}
