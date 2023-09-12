import type { OptionBase } from "../../../shared/types"
import type { HTMLInputTypeAttribute } from "react"

type RiskyValues = HTMLInputTypeAttribute
export type MessageIdList = "NoOption"

export type Option = OptionBase<{
  riskyValues: RiskyValues[]
}>
