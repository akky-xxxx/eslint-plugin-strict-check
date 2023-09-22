import { restrictUseOfProcessEnv } from "../../../../src/rules/restrict-use-of-process-env"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/restrict-use-of-process-env/types"

tester.run<MessageId, Option[]>(
  "restrict-use-of-process-env",
  restrictUseOfProcessEnv,
  {
    valid: [
      {
        code: "const { PORT } = Environment",
      },
      {
        code: "const PORT = Environment.PORT",
      },
    ],
    invalid: [
      {
        code: "const { env: variableName } = process",
        errors: [
          {
            messageId: "UsedProcessEnv",
          },
        ],
      },
      {
        code: "const { env } = process",
        errors: [
          {
            messageId: "UsedProcessEnv",
          },
        ],
      },
      {
        code: "const variableName = process.env",
        errors: [
          {
            messageId: "UsedProcessEnv",
          },
        ],
      },
      {
        code: "const env = process.env",
        errors: [
          {
            messageId: "UsedProcessEnv",
          },
        ],
      },
    ],
  },
)
