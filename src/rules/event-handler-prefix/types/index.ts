import type { RuleContext } from "@typescript-eslint/utils/dist/ts-eslint/Rule"

export type Prefixes = "handle" | "on"
export type MessageIdList = "NoOption"

export type Option = {
  forbiddenPrefix: Prefixes
}

export type Context = Readonly<RuleContext<MessageIdList, readonly Option[]>>
