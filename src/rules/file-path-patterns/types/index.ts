import type { OptionBase } from "../../../shared/types"

export type MessageIdList = "NotMatchedPatterns"

export type Option = OptionBase<{
  allowPatterns: RegExp[]
}>
