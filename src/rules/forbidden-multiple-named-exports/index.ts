import { exportNamedDeclaration } from "./modules/exportNamedDeclaration"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const forbiddenMultipleNamedExports: TSESLint.RuleModule<
  string,
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
      MultipleNamedExported: "",
    },
    schema: {},
    type: "problem",
  },
}
