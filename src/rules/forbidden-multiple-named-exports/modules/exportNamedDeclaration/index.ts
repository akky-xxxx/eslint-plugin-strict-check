import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type ExportNamedDeclaration = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ExportNamedDeclaration>

const OneTime = 1

export const exportNamedDeclaration: ExportNamedDeclaration = (context) => {
  const { getFilename, report } = context
  const filename = getFilename()
  const counts = {
    [filename]: 0,
  }

  return (node) => {
    counts[filename] += 1
    if (counts[filename] <= OneTime) {
      return
    }

    report({
      messageId: "MultipleNamedExported",
      node,
    })
  }
}
