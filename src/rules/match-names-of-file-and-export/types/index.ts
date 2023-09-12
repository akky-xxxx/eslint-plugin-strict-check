import type { OptionBase } from "../../../shared/types"

export type MessageIdList = "FileAndExportAreDifferent"

export type Option = OptionBase<{
  captures: RegExp[]
}>
