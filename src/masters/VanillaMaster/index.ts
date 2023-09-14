import { pick } from "remeda"

import { convertBaseToMaster } from "../../shared/utility/convertBaseToMaster"
import { masterBase } from "../Master"

import type { MasterRecord } from "../../shared/types/MasterRecord"

const base = pick(masterBase, ["restrict-use-of-process-env"])

export const VanillaMaster: MasterRecord[] = convertBaseToMaster(base)
