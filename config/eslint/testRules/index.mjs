import { eslintRules } from "./eslintRules/index.mjs"
import { stylisticRules } from "./stylisticRules/index.mjs"
import { typescriptEslintRules } from "./typescriptEslintRules/index.mjs"

export const testRules = {
  ...eslintRules,
  ...stylisticRules,
  ...typescriptEslintRules,
}
