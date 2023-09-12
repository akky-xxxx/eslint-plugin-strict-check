import { Prefix } from "../../shared/const/Prefix"

import type { UtilFunction } from "../../shared/types"
import type { Options } from "../../shared/types/Options"
import type { RuleName } from "../../shared/types/RuleName"

type GetConfigRules = UtilFunction<Record<RuleName, Options>>
export const getConfigRules: GetConfigRules = (current, master) => {
  const [ruleName, , options] = master
  return {
    ...current,
    [`${Prefix}/${ruleName}`]: options,
  }
}
