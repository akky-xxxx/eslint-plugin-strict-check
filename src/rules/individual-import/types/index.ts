import type { OptionBase } from "../../../shared/types"

export type MessageIdList = "NoOption"

export type Option = OptionBase<{
  targets: string[]
}>
