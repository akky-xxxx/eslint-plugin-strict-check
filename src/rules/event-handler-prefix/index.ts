import { functionDeclaration } from "./modules/functionDeclaration"
import { variableDeclarator } from "./modules/variableDeclarator"

import type { MessageIdList, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const eventHandlerPrefix: TSESLint.RuleModule<MessageIdList, Option[]> =
  {
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
