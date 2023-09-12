import type { MasterRecord } from "./MasterRecord"

export type UtilFunction<T> = (current: T, master: MasterRecord) => T
