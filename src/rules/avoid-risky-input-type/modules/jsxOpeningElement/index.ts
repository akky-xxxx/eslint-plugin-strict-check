import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type JsxOpeningElement = (
  context: Context,
) => RuleFunction<TSESTree.JSXOpeningElement>

// eslint-disable-next-line max-statements, complexity
export const jsxOpeningElement: JsxOpeningElement = (context) => (node) => {
  const { options, report } = context

  if (!options.length) {
    report({
      messageId: "NoOption",
      node,
    })
    return
  }

  const targetAttribute = node.attributes.find((attribute) => {
    if (attribute.type !== "JSXAttribute") return false
    return attribute.name.name === "type"
  })

  if (!targetAttribute || targetAttribute.type !== "JSXAttribute") return

  const { value: parentValue } = targetAttribute
  if (
    !parentValue ||
    parentValue.type !== "Literal" ||
    typeof parentValue.value !== "string"
  ) {
    return
  }

  const { value } = parentValue
  if (!options[0].riskyValues.includes(value)) return

  report({
    message: `<input type="${value}" /> is risky. please rethink other type value`,
    node,
  })
}
