import type { OptionBase } from "../../../shared/types/OptionBase"
import type { TSESLint } from "@typescript-eslint/utils"

export type Prefixes = "handle" | "on"

export type MessageId = "forbiddenHandlerPrefix"

export type Option = OptionBase<{
  forbiddenPrefix: Prefixes
}>

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
