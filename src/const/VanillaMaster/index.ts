import { filePathPatterns } from "../../rules/file-path-patterns"
import { forbiddenMultipleNamedExports } from "../../rules/forbidden-multiple-named-exports"
import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const VanillaMaster: MasterRecord[] = [
  ["file-path-patterns", filePathPatterns, [Warn]],
  ["forbidden-multiple-named-exports", forbiddenMultipleNamedExports, []],
  ["restrict-use-of-process-env", restrictUseOfProcessEnv, [Warn]],
]
