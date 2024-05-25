import { Prefix } from "../../shared/const/Prefix"
import { getConfigRules } from "../getConfigRules"

import type { MasterRecord } from "../../shared/types/MasterRecord"
import type { Options } from "../../shared/types/Options"
import type { RuleName } from "../../shared/types/RuleName"

type GetFlatConfigs = (plugin: Record<string, unknown>, master: MasterRecord[]) => {
  plugins: Record<typeof Prefix, Record<string, unknown>>
  rules: Record<RuleName, Options>
}

export const getFlatConfig: GetFlatConfigs = (plugin, master) => ({
  plugins: {
    "strict-check": plugin,
  },
  rules: master.reduce(getConfigRules, {}),
})
