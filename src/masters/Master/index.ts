import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { filePathPatterns } from "../../rules/file-path-patterns"
import { forbiddenHardCodingHref } from "../../rules/forbidden-hard-coding-href"
import { forbiddenMultipleNamedExports } from "../../rules/forbidden-multiple-named-exports"
import { forbiddenUseReactHooks } from "../../rules/forbidden-use-react-hooks"
import { individualImport } from "../../rules/individual-import"
import { matchNamesOfFileAndExport } from "../../rules/match-names-of-file-and-export"
import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Severity } from "../../shared/const/Severity"
import { convertBaseToMaster } from "../../shared/utility/convertBaseToMaster"

import type { MasterBase } from "../../shared/types/MasterBase"
import type { MasterRecord } from "../../shared/types/MasterRecord"

export const masterBase = {
  "avoid-risky-input-type": [
    avoidRiskyInputType,
    [Severity.WARN, { riskyValues: ["email", "number", "tel"] }],
  ],
  "event-handler-prefix": [
    eventHandlerPrefix,
    [Severity.WARN, { forbiddenPrefix: "on" }],
  ],
  "file-path-patterns": [filePathPatterns, [Severity.WARN]],
  "forbidden-hard-coding-href": [forbiddenHardCodingHref, []],
  "forbidden-multiple-named-exports": [forbiddenMultipleNamedExports, []],
  "forbidden-use-react-hooks": [forbiddenUseReactHooks, [Severity.WARN]],
  "individual-import": [
    individualImport,
    [Severity.WARN, { targets: ["react"] }],
  ],
  "match-names-of-file-and-export": [matchNamesOfFileAndExport, []],
  "restrict-use-of-process-env": [restrictUseOfProcessEnv, [Severity.WARN]],
} satisfies MasterBase

export const Master: MasterRecord[] = convertBaseToMaster(masterBase)
