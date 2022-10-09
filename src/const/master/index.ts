import { avoidRiskyInputType } from "../../rules/avoid-risky-input-type"
import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { forbiddenHardCodingHref } from "../../rules/forbidden-hard-coding-href"
import { individualImport } from "../../rules/individual-import"
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
  ["forbidden-hard-coding-href", forbiddenHardCodingHref, []],
  ["individual-import", individualImport, []],
]
