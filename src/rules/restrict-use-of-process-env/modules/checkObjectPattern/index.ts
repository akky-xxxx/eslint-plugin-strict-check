import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type CheckObjectPatten = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ObjectPattern>

export const checkObjectPatten: CheckObjectPatten = (context) => (node) => {
  if (
    node.parent.type !== "VariableDeclarator" ||
    node.parent.init?.type !== "Identifier" ||
    node.parent.init.name !== "process"
  ) {
    return
  }

  const hasEnv = node.properties.some((property) => {
    if (property.type !== "Property" || property.key.type !== "Identifier") {
      return false
    }
    return property.key.name === "env"
  })

  if (!hasEnv) return

  context.report({
    messageId: "UsedProcessEnv",
    node,
  })
}
