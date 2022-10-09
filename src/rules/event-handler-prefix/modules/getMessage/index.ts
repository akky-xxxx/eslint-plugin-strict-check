import type { Prefixes } from "../../types"

const messageBase = "of handler prefix"

type GetMessage = (forbiddenPrefix: Prefixes) => string
export const getMessage: GetMessage = (forbiddenPrefix) => {
  const correctPrefix = forbiddenPrefix === "on" ? "handle" : "on"
  return `replace "${forbiddenPrefix}" to "${correctPrefix}" ${messageBase}`
}
