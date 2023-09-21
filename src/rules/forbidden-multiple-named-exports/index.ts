import { exportNamedDeclaration } from "./modules/exportNamedDeclaration"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenMultipleNamedExports: TSESLint.RuleModule<
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
      MultipleNamedExported: "Reduce the export to one time.",
    },
    schema: [],
    type: "problem",
  },
}
