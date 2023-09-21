import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "FileAndExportAreDifferent"

export type Option = OptionBase<{
  captures: RegExp[]
}>
