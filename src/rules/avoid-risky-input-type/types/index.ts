import type { OptionBase } from "../../../shared/types/OptionBase"
import type { HTMLInputTypeAttribute } from "react"

type RiskyValues = HTMLInputTypeAttribute
export type MessageIdList = "NoOption"

export type Option = OptionBase<{
  riskyValues: RiskyValues[]
}>
