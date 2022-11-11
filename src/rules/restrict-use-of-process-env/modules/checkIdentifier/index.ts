import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type CheckIdentifier = (context: Context) => RuleFunction<TSESTree.Identifier>

export const checkIdentifier: CheckIdentifier = (context) => (node) => {
  if (
    node.name !== "process" ||
    node.parent?.type !== "MemberExpression" ||
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
