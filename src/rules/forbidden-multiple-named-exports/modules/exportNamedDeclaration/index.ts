import type { Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

export type Context = Readonly<RuleContext<string, readonly Option[]>>
type ExportNamedDeclaration = (
  context: Context,
) => RuleFunction<TSESTree.ExportNamedDeclaration>

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
      message: "Reduce the export to one time.",
      node,
    })
  }
}
