import { functionDeclaration } from "./modules/functionDeclaration"
import { variableDeclarator } from "./modules/variableDeclarator"

import type { MessageId, Option } from "./types"
import type { TSESLint } from "@typescript-eslint/utils"

export const eventHandlerPrefix: TSESLint.RuleModule<MessageId, Option[]> = {
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
      forbiddenHandlerPrefix:
        'Replace "{{ forbiddenPrefix }}" to "{{ correctPrefix }}" of handler prefix.',
    },
    schema: {
      type: "array",
    },
    type: "suggestion",
  },
}
