import { avoidRiskyInputType } from "../../../../src/rules/avoid-risky-input-type"
import { tester } from "../utils/tester"

import type { Option } from "../../../../src/rules/avoid-risky-input-type/types"

tester.run<string, Option[]>("avoid-risky-input-type", avoidRiskyInputType, {
  valid: [
    {
      name: 'It is valid, when "number" specify to riskyValue, "text" specify to input.type.',
      code: 'const Valid = () => <input type="text" />',
      options: [{ riskyValues: ["number"] }],
    },
    {
      name: 'It is valid, when "number" specify to riskyValue, not specify input.type.',
      code: "const Valid = () => <input />",
      options: [{ riskyValues: ["number"] }],
    },
    {
      name: 'It is valid, when "text" specify to riskyValue, "text" specify to other than input.',
      code: "const Valid = () => <div type='text' />",
      options: [{ riskyValues: ["text"] }],
    },
  ],
  invalid: [
    {
      name: 'It is invalid, when "number" specify to both riskyValues, input.type.',
      code: 'const Valid = () => <input type="number" />',
      options: [{ riskyValues: ["number"] }],
      errors: [
        '<input type="number" /> is risky. please rethink other type value',
      ],
    },
  ],
})
