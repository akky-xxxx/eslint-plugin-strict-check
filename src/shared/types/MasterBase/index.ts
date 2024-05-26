import type { MasterRecord } from "../MasterRecord"
import type { RuleName } from "../RuleName"

export type MasterBase = Record<RuleName, [MasterRecord[1], MasterRecord[2]]>
