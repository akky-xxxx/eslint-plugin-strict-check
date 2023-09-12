import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { forbiddenUseReactHooks } from "../../rules/forbidden-use-react-hooks"
import { individualImport } from "../../rules/individual-import"
import { Severity } from "../../shared/const/Severity"
import { VanillaMaster } from "../VanillaMaster"

import type { MasterRecord } from "../../shared/types/MasterRecord"

export const ReactMaster: MasterRecord[] = [
  ...VanillaMaster,
  [
    "event-handler-prefix",
    eventHandlerPrefix,
    [Severity.WARN, { forbiddenPrefix: "on" }],
  ],
  [
    "avoid-risky-input-type",
    avoidRiskyInputType,
    [Severity.WARN, { riskyValues: ["email", "number", "tel"] }],
  ],
  ["forbidden-use-react-hooks", forbiddenUseReactHooks, [Severity.WARN]],
  [
    "individual-import",
    individualImport,
    [Severity.WARN, { targets: ["react"] }],
  ],
]
