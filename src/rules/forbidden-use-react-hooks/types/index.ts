import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "ImportedReactHooks" | "UsedReactHooks"

export type Option = OptionBase<{
  allowPatterns: RegExp[]
}>
