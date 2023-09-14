import type { OptionBase } from "../../../shared/types/OptionBase"
import type { RuleContext } from "@typescript-eslint/utils/dist/ts-eslint/Rule"

export type Prefixes = "handle" | "on"

export type Option = OptionBase<{
  forbiddenPrefix: Prefixes
}>

export type Context = Readonly<RuleContext<string, readonly Option[]>>
