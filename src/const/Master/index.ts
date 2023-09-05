import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { filePathPatterns } from "../../rules/file-path-patterns"
import { forbiddenHardCodingHref } from "../../rules/forbidden-hard-coding-href"
import { forbiddenMultipleNamedExports } from "../../rules/forbidden-multiple-named-exports"
import { forbiddenUseReactHooks } from "../../rules/forbidden-use-react-hooks"
import { individualImport } from "../../rules/individual-import"
import { restrictUseOfProcessEnv } from "../../rules/restrict-use-of-process-env"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const Master: MasterRecord[] = [
  [
    "event-handler-prefix",
    eventHandlerPrefix,
    [Warn, { forbiddenPrefix: "on" }],
  ],
  [
    "avoid-risky-input-type",
    avoidRiskyInputType,
    [Warn, { riskyValues: ["email", "number", "tel"] }],
  ],
  ["file-path-patterns", filePathPatterns, [Warn]],
  ["forbidden-hard-coding-href", forbiddenHardCodingHref, []],
  ["forbidden-multiple-named-exports", forbiddenMultipleNamedExports, []],
  ["forbidden-use-react-hooks", forbiddenUseReactHooks, [Warn]],
  ["individual-import", individualImport, []],
  ["restrict-use-of-process-env", restrictUseOfProcessEnv, []],
]
