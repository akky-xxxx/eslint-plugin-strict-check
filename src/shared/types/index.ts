import type { TSESLint } from "@typescript-eslint/utils"

export type RuleName = string
export type Options = readonly unknown[]
type MessageId = string
export type EsLintRuleBase = TSESLint.RuleModule<MessageId, Options>
export type MasterRecord = [RuleName, EsLintRuleBase, Options]
export type UtilFunction<T> = (current: T, master: MasterRecord) => T
export type OptionBase<O extends Record<string, unknown>> = {
  [K in keyof O]?: O[K] | unknown
}
