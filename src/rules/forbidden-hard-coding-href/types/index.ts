import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "HardCoded"

export type Option = OptionBase<{
  forbiddenValues: string[]
}>
