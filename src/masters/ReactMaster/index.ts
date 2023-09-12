import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { forbiddenUseReactHooks } from "../../rules/forbidden-use-react-hooks"
import { individualImport } from "../../rules/individual-import"
import { Warn } from "../../shared/const"
import { VanillaMaster } from "../VanillaMaster"

import type { MasterRecord } from "../../shared/types"

export const ReactMaster: MasterRecord[] = [
  ...VanillaMaster,
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
  ["forbidden-use-react-hooks", forbiddenUseReactHooks, [Warn]],
  ["individual-import", individualImport, [Warn, { targets: ["react"] }]],
]
