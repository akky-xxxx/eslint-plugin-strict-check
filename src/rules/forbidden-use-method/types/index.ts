import type { OptionBase } from "../../../shared/types/OptionBase"

export type MessageId = "ImportedForbiddenMethod" | "UsedForbiddenMethod"

export type Option = OptionBase<{
  allowPatterns?: RegExp[]
  disallowPatterns?: RegExp[]
  methods: string[]
}>
