import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"
import { hasTarget } from "../hasTarget"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type JSXOpeningElement = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.JSXOpeningElement>

export const jsxOpeningElement: JSXOpeningElement = (context) => {
  const { options, report } = context

  const [{ targets }] = parseOption(options, optionsSchema)

  return (node) => {
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
      data: {
        lowerModuleName: moduleName.toLowerCase(),
        moduleName,
        propertyName,
      },
      messageId: "NotIndividually",
      node,
    })
  }
}
