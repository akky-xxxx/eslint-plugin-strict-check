import { restrictUseOfProcessEnv } from "../../../../src/rules/restrict-use-of-process-env"
import { tester } from "../utils/tester"

import type { Option } from "../../../../src/rules/restrict-use-of-process-env/types"

tester.run<string, Option[]>(
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
        errors: ["using process.env is restricted, replace to allowed method"],
      },
      {
        code: "const { env } = process",
        errors: ["using process.env is restricted, replace to allowed method"],
      },
      {
        code: "const variableName = process.env",
        errors: ["using process.env is restricted, replace to allowed method"],
      },
      {
        code: "const env = process.env",
        errors: ["using process.env is restricted, replace to allowed method"],
      },
    ],
  },
)
