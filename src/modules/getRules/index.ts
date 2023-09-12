import type { EsLintRuleBase } from "../../shared/types/EsLintRuleBase"
import type { GetRulesBase } from "../../shared/types/GetRulesBase"
import type { RuleName } from "../../shared/types/RuleName"

type GetRules = GetRulesBase<Record<RuleName, EsLintRuleBase>>
export const getRules: GetRules = (current, master) => {
  const [ruleName, ruleFunction] = master
  return {
    ...current,
    [ruleName]: ruleFunction,
  }
}
