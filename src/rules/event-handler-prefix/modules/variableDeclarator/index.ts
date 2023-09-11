import { isNotApplicable } from "./modules/isNotApplicable"
import { FirstOption } from "../../../../const/FirstOption"
import { getNotHasOptionErrorMessage } from "../../../../shared/utility/getNotHasOptionErrorMessage"
import { getMessage } from "../getMessage"

import type { Context } from "../../types"
import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"

type VariableDeclarator = (
  context: Context,
) => RuleFunction<TSESTree.VariableDeclarator>

export const variableDeclarator: VariableDeclarator = (context) => {
  const { options, report } = context
  const firstOption = options.at(FirstOption)

  if (!firstOption) {
    throw new Error(getNotHasOptionErrorMessage())
  }

  const { forbiddenPrefix } = firstOption

  if (!forbiddenPrefix) {
    throw new Error(getNotHasOptionErrorMessage("forbiddenPrefix"))
  }

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
