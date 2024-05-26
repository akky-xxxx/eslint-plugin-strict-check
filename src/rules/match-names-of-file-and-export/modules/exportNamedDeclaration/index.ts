import { ArrayFirstIndex } from "../../../../shared/const/ArrayFirstIndex"
import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

const CapturedIndex = 1

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type ExportNamedDeclaration = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ExportNamedDeclaration>

export const exportNamedDeclaration: ExportNamedDeclaration = (context) => {
  const { filename, options, report } = context
  const [{ captures }] = parseOption(options, optionsSchema)

  const matchedCapture = captures.find((capture) => capture.test(filename))

  return (node) => {
    if (!matchedCapture) return

    const { declaration } = node

    if (declaration?.type !== "VariableDeclaration") return

    const firstDeclaration = declaration.declarations.at(ArrayFirstIndex)
    if (firstDeclaration?.id.type !== "Identifier") return
    const {
      id: { name: variableName },
    } = firstDeclaration

    const capturedString = filename.match(matchedCapture)?.at(CapturedIndex)

    if (variableName === capturedString) return

    report({
      data: {
        capturedString,
        filepath: filename,
        variableName,
      },
      messageId: "FileAndExportAreDifferent",
      node,
    })
  }
}
