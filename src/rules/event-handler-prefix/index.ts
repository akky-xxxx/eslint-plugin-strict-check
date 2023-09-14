import { functionDeclaration } from "./modules/functionDeclaration"
import { variableDeclarator } from "./modules/variableDeclarator"

import type { Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const eventHandlerPrefix: TSESLint.RuleModule<string, Option[]> = {
  create: (context) => {
    const functionDeclarationMain = functionDeclaration(context)
    const variableDeclaratorMain = variableDeclarator(context)
    return {
      FunctionDeclaration: functionDeclarationMain,
      VariableDeclarator: variableDeclaratorMain,
    }
  },
  defaultOptions: [],
  meta: {
    messages: {
      NoOption: "not specified option",
    },
    schema: {},
    type: "suggestion",
  },
}
