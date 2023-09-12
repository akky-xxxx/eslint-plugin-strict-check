import type { Options } from "../Options"
import type { TSESLint } from "@typescript-eslint/utils"

type MessageId = string
export type EsLintRuleBase = TSESLint.RuleModule<MessageId, Options>
