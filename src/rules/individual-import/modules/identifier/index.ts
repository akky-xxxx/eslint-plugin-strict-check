import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"
import { getErrorMessage } from "../getErrorMessage"
import { hasTarget } from "../hasTarget"

import type { Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<string, readonly Option[]>>
type Identifier = (context: Context) => RuleFunction<TSESTree.Identifier>

export const identifier: Identifier = (context) => {
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

    if (node.parent?.type !== "TSQualifiedName") return

    const {
      parent: {
        right: { name: propertyName },
      },
    } = node
    const { name: moduleName } = node

    if (!hasTarget(targets, moduleName) || !propertyName) return

    report({
      message: getErrorMessage(moduleName, propertyName),
      node,
    })
  }
}
