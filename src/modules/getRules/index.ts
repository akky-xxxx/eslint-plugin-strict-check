import type { UtilFunction } from "../../shared/types"
import type { EsLintRuleBase } from "../../shared/types/EsLintRuleBase"
import type { RuleName } from "../../shared/types/RuleName"

type GetRules = UtilFunction<Record<RuleName, EsLintRuleBase>>
export const getRules: GetRules = (current, master) => {
  const [ruleName, ruleFunction] = master
  return {
    ...current,
    [ruleName]: ruleFunction,
  }
}
