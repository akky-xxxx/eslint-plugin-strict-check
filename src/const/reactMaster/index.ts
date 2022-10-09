import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { individualImport } from "../../rules/individual-import"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const ReactMaster: MasterRecord[] = [
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
  ["individual-import", individualImport, [Warn, { targets: ["react"] }]],
]
