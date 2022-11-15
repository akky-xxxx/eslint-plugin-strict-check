import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type CheckObjectPatten = (
  context: Context,
) => RuleFunction<TSESTree.ObjectPattern>

export const checkObjectPatten: CheckObjectPatten = (context) => (node) => {
  if (
    node.parent?.type !== "VariableDeclarator" ||
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
