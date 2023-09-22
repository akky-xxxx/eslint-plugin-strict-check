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
  const fileName = getFilename()
  const counts = {
    [fileName]: 0,
  }

  return (node) => {
    counts[fileName] += 1
    if (counts[fileName] <= OneTime) {
      return
    }

    report({
      messageId: "MultipleNamedExported",
      node,
    })
  }
}
