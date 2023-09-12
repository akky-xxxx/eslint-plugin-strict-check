import type { Options } from "./Options"
import type { RuleName } from "./RuleName"
import type { TSESLint } from "@typescript-eslint/utils"

type MessageId = string
export type EsLintRuleBase = TSESLint.RuleModule<MessageId, Options>
export type MasterRecord = [RuleName, EsLintRuleBase, Options]
export type UtilFunction<T> = (current: T, master: MasterRecord) => T
