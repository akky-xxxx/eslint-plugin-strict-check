import type { UtilFunction, EsLintRuleBase, RuleName } from "../../shared/types"

type GetRules = UtilFunction<Record<RuleName, EsLintRuleBase>>
export const getRules: GetRules = (current, master) => {
  const [ruleName, ruleFunction] = master
  return {
    ...current,
    [ruleName]: ruleFunction,
  }
}
