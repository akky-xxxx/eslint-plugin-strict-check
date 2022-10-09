import { avoidRiskyInputType } from "../../../../src/rules/avoid-risky-input-type"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/avoid-risky-input-type/types"

tester.run<MessageIdList, Option[]>(
  "avoid-risky-input-type",
  avoidRiskyInputType,
  {
    valid: [
      {
        code: 'const Valid = () => <input type="text" />',
        options: [{ riskyValues: ["number"] }],
      },
      {
        code: "const Valid = () => <input />",
        options: [{ riskyValues: ["number"] }],
      },
    ],
    invalid: [
      {
        code: 'const Valid = () => <input type="number" />',
        options: [{ riskyValues: ["number"] }],
        errors: [
          '<input type="number" /> is risky. please rethink other type value',
        ],
      },
      {
        code: 'const Valid = () => <input type="text" />',
        errors: [{ messageId: "NoOption" }],
      },
    ],
  },
)
