import { eslintRules } from "./eslintRules/index.mjs"
import { typescriptEslintRules } from "./typescriptEslintRules/index.mjs"

export const scriptRules = {
  ...eslintRules,
  ...typescriptEslintRules,
}
