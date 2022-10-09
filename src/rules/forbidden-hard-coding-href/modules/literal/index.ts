import type { MessageIdList, Option } from "../../types"
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint"
import type { RuleContext } from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>

type Literal = (context: Context) => RuleFunction<TSESTree.Literal>

export const literal: Literal = (context) => (node) => {
  const { value } = node
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  const [{ forbiddenValues }] = options

  if (!forbiddenValues.includes(String(value))) return

  report({
    message: `don't hard code "${String(
      value,
    )}", replace to designated constant or function`,
    node,
  })
}
