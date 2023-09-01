import { filePathPatterns } from "../../rules/file-path-patterns"
import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const VanillaMaster: MasterRecord[] = [
  ["file-path-patterns", filePathPatterns, [Warn]],
  ["restrict-use-of-process-env", restrictUseOfProcessEnv, [Warn]],
]
