import { pick } from "remeda"

import { convertBaseToMaster } from "../../shared/utility/convertBaseToMaster"
import { masterBase } from "../Master"

import type { MasterRecord } from "../../shared/types/MasterRecord"

const base = pick(masterBase, [
  "event-handler-prefix",
  "avoid-risky-input-type",
  "individual-import",
])

export const ReactMaster: MasterRecord[] = convertBaseToMaster(base)
