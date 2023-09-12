import { ArrayFirstIndex } from "../../../../const/ArrayFirstIndex"
import { parseOption } from "../../../../shared/utility/parseOption"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageIdList, Option } from "../../types"
import type {
  RuleContext,
  RuleFunction,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type { TSESTree } from "@typescript-eslint/utils/dist/ts-estree"

const CapturedIndex = 1

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
type ExportNamedDeclaration = (
  context: Context,
) => RuleFunction<TSESTree.ExportNamedDeclaration>

export const exportNamedDeclaration: ExportNamedDeclaration = (context) => {
  const { getFilename, options, report } = context
  const fileName = getFilename()
  const [{ captures }] = parseOption(options, optionsSchema)

  const matchedCapture = captures.find((capture) => capture.test(fileName))

  // eslint-disable-next-line complexity, max-statements
  return (node) => {
    const { declaration } = node

    if (declaration?.type !== "VariableDeclaration") return

    const firstDeclaration = declaration.declarations.at(ArrayFirstIndex)
    if (firstDeclaration?.id.type !== "Identifier") return
    const {
      id: { name: variableName },
    } = firstDeclaration

    if (!matchedCapture) {
      report({
        message: "Not exist matched filename by capture.",
        node,
      })
      return
    }

    const capturedString = fileName.match(matchedCapture)?.at(CapturedIndex)

    if (!capturedString) {
      report({
        message: "Not exist capture in the regular expressions.",
        node,
      })
      return
    }

    if (variableName === capturedString) return

    report({
      message: `Not matched names of file and export. File name is "${capturedString}", variable name is "${variableName}".`,
      node,
    })
  }
}
