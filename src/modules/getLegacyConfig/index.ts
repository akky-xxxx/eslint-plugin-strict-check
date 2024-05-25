import { Prefix } from "../../shared/const/Prefix"
import { getConfigRules } from "../getConfigRules"

import type { MasterRecord } from "../../shared/types/MasterRecord"
import type { Options } from "../../shared/types/Options"
import type { RuleName } from "../../shared/types/RuleName"

type GetLegacyConfigs = (master: MasterRecord[]) => {
  plugins: string[]
  rules: Record<RuleName, Options>
}

export const getLegacyConfig: GetLegacyConfigs = (master) => ({
  plugins: [Prefix],
  rules: master.reduce(getConfigRules, {}),
})
