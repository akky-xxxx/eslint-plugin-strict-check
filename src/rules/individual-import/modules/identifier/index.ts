import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"
import { hasTarget } from "../hasTarget"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type Identifier = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.Identifier>

export const identifier: Identifier = (context) => {
  const { options, report } = context

  const [{ targets }] = parseOption(options, optionsSchema)

  return (node) => {
    if (node.parent.type !== "TSQualifiedName") return

    const {
      parent: {
        right: { name: propertyName },
      },
    } = node
    const { name: moduleName } = node

    if (!hasTarget(targets, moduleName) || !propertyName) return

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
