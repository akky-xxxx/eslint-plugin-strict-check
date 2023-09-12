import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageIdList = "NoOption"

export type Option = OptionBase<{
  forbiddenValues: string[]
}>
