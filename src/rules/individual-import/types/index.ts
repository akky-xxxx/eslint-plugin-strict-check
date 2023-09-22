import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "NotIndividually"

export type Option = OptionBase<{
  targets: string[]
}>
