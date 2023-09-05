import { exportNamedDeclaration } from "./modules/exportNamedDeclaration"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const matchNamesOfFileAndExport: TSESLint.RuleModule<
  MessageIdList,
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
      FileAndExportAreDifferent: "",
    },
    schema: {},
    type: "problem",
  },
}
