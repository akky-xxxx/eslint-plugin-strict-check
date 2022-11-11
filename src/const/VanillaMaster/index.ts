import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const VanillaMaster: MasterRecord[] = [
  ["restrict-use-of-process-env", restrictUseOfProcessEnv, [Warn]],
]
