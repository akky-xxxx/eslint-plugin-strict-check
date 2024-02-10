import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "ImportedReactHooks" | "UsedReactHooks"

type AllowPattern = {
  allowPatterns: RegExp[]
}

type DisallowPattern = {
  disallowPatterns: RegExp[]
}

export type Option = OptionBase<AllowPattern | DisallowPattern>
