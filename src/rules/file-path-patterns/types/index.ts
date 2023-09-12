import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageIdList = "NotMatchedPatterns"

export type Option = OptionBase<{
  allowPatterns: RegExp[]
}>
