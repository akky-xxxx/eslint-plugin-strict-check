import type { OptionBase } from "../../../shared/types/OptionBase"
import type { HTMLInputTypeAttribute } from "react"

type RiskyValues = HTMLInputTypeAttribute

export type MessageId = "riskyValue"

export type Option = OptionBase<{
  riskyValues: RiskyValues[]
}>
