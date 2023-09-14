import type { MasterBase } from "../../types/MasterBase"
import type { MasterRecord } from "../../types/MasterRecord"

type ConvertBaseToMaster = (masterBase: MasterBase) => MasterRecord[]
export const convertBaseToMaster: ConvertBaseToMaster = (base) =>
  Object.entries(base).map(([key, value]) => [key, ...value])
