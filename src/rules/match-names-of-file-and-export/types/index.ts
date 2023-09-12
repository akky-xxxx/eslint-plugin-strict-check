import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageIdList = "FileAndExportAreDifferent"

export type Option = OptionBase<{
  captures: RegExp[]
}>
