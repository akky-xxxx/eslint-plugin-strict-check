import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "NotMatched"

export type Option = OptionBase<{
  allowPatterns: RegExp[]
}>
