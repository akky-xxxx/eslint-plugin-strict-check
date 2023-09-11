import { FirstOption } from "../../../../const/FirstOption"
import { getNotHasOptionErrorMessage } from "../../../../shared/utility/getNotHasOptionErrorMessage"
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

export const identifier: Identifier = (context) => {
  const { options, report } = context

  const firstOption = options.at(FirstOption)

  if (!firstOption) {
    throw new Error(getNotHasOptionErrorMessage())
  }

  const { targets } = firstOption

  if (!targets) {
    throw new Error(getNotHasOptionErrorMessage("targets"))
  }

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
