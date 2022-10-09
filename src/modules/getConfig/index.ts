import { Prefix } from "../../shared/const"
import { getConfigRules } from "../getConfigRules"

import type { MasterRecord, Options, RuleName } from "../../shared/types"

type GetConfigs = (master: MasterRecord[]) => {
  plugins: string[]
  rules: Record<RuleName, Options>
}

export const getConfig: GetConfigs = (master) => ({
  plugins: [Prefix],
  rules: master.reduce(getConfigRules, {}),
})
