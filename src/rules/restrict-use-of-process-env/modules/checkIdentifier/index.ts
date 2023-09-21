import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type CheckIdentifier = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.Identifier>

export const checkIdentifier: CheckIdentifier = (context) => (node) => {
  if (
    node.name !== "process" ||
    node.parent.type !== "MemberExpression" ||
    node.parent.property.type !== "Identifier" ||
    node.parent.property.name !== "env"
  ) {
    return
  }

  context.report({
    messageId: "UsedProcessEnv",
    node,
  })
}
