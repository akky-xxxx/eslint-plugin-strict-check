import { getErrorMessage } from "../getErrorMessage"
import { hasTarget } from "../hasTarget"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type Identifier = (context: Context) => RuleFunction<TSESTree.Identifier>

export const identifier: Identifier = (context) => (node) => {
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  if (node.parent?.type !== "TSQualifiedName") return

  const {
    parent: {
      right: { name: propertyName },
    },
  } = node
  const { name: moduleName } = node

  if (!hasTarget(options[0].targets, moduleName) || !propertyName) return

  report({
    message: getErrorMessage(moduleName, propertyName),
    node,
  })
}
