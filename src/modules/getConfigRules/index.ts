import { Prefix } from "../../shared/const"

import type { UtilFunction, Options, RuleName } from "../../shared/types"

type GetConfigRules = UtilFunction<Record<RuleName, Options>>
export const getConfigRules: GetConfigRules = (current, master) => {
  const [ruleName, , options] = master
  return {
    ...current,
    [`${Prefix}/${ruleName}`]: options,
  }
}
