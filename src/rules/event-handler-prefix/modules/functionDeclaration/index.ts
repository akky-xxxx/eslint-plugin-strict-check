import { getMessage } from "../getMessage"

import type { Context } from "../../types"
import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"

type FunctionDeclaration = (
  context: Context,
) => RuleFunction<TSESTree.FunctionDeclaration>

export const functionDeclaration: FunctionDeclaration = (context) => (node) => {
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  const { forbiddenPrefix } = options[0]
  if (!node.id?.name.startsWith(forbiddenPrefix)) return
  report({
    message: getMessage(forbiddenPrefix),
    node,
  })
}
