import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"
import { getErrorMessage } from "../getErrorMessage"
import { hasTarget } from "../hasTarget"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type JSXOpeningElement = (
  context: Context,
) => RuleFunction<TSESTree.JSXOpeningElement>

export const jsxOpeningElement: JSXOpeningElement = (context) => {
  const { options, report } = context

  const [{ targets }] = parseOption(options, optionsSchema)

  return (node) => {
    if (!options.length) {
      report({
        messageId: "NoOption",
        node,
      })
      return
    }

    if (
      node.name.type !== "JSXMemberExpression" ||
      node.name.object.type !== "JSXIdentifier"
    ) {
      return
    }

    const {
      name: {
        object: { name: moduleName },
        property: { name: propertyName },
      },
    } = node

    if (!hasTarget(targets, moduleName)) return

    report({
      message: getErrorMessage(moduleName, propertyName),
      node,
    })
  }
}
