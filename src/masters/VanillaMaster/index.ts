import { filePathPatterns } from "../../rules/file-path-patterns"
import { forbiddenMultipleNamedExports } from "../../rules/forbidden-multiple-named-exports"
import { matchNamesOfFileAndExport } from "../../rules/match-names-of-file-and-export"
import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Severity } from "../../shared/const/Severity"

import type { MasterRecord } from "../../shared/types"

export const VanillaMaster: MasterRecord[] = [
  ["file-path-patterns", filePathPatterns, [Severity.WARN]],
  ["forbidden-multiple-named-exports", forbiddenMultipleNamedExports, []],
  ["match-names-of-file-and-export", matchNamesOfFileAndExport, []],
  ["restrict-use-of-process-env", restrictUseOfProcessEnv, [Severity.WARN]],
]
