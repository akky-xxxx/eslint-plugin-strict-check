import type { MasterRecord } from "./MasterRecord"

export type GetRulesBase<T> = (current: T, master: MasterRecord) => T
