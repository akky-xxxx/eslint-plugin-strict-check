import type { MasterRecord } from "../MasterRecord"
import type { RuleName } from "../RuleName"

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export type MasterBase = Record<RuleName, [MasterRecord[1], MasterRecord[2]]>
