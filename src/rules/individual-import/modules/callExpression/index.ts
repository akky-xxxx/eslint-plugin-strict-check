import { getErrorMessage } from "../getErrorMessage"
import { hasTarget } from "../hasTarget"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type CallExpression = (
  context: Context,
) => RuleFunction<TSESTree.CallExpression>

// eslint-disable-next-line complexity
export const callExpression: CallExpression = (context) => (node) => {
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  if (
    node.callee.type !== "MemberExpression" ||
    node.callee.object.type !== "Identifier" ||
    node.callee.property.type !== "Identifier"
  ) {
    return
  }

  const {
    callee: {
      object: { name: moduleName },
      property: { name: propertyName },
    },
  } = node

  if (!hasTarget(options[0].targets, moduleName)) return

  report({
    message: getErrorMessage(moduleName, propertyName),
    node,
  })
}
