import { exportNamedDeclaration } from "./modules/exportNamedDeclaration"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const matchNamesOfFileAndExport: TSESLint.RuleModule<
  MessageId,
  Option[]
> = {
  create: (context) => {
    const exportNamedDeclarationMain = exportNamedDeclaration(context)

    return {
      ExportNamedDeclaration: exportNamedDeclarationMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      FileAndExportAreDifferent:
        // eslint-disable-next-line @stylistic/max-len
        "Not matched names of file and export. File name is {{ capturedString }}, variable name is \"{{ variableName }}\".",
    },
    schema: {
      type: "array",
    },
    type: "problem",
  },
}
