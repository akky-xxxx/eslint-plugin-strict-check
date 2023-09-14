import { forbiddenHardCodingHref } from "../../../../src/rules/forbidden-hard-coding-href"
import { tester } from "../utils/tester"

import type { Option } from "../../../../src/rules/forbidden-hard-coding-href/types"

const forbiddenValues = ["/", "/search"]

tester.run<string, Option[]>(
  "forbidden-hard-coding-href",
  forbiddenHardCodingHref,
  {
    valid: [
      {
        name: "It is valid, when defined string does not include in forbiddenValues.",
        code: 'const href = "age"',
        options: [{ forbiddenValues }],
      },
    ],
    invalid: [
      {
        name: "It is invalid, when used string includes in forbidden Values, on JSX syntax.",
        code: 'const Component = () => <a href="/">top</a>',
        options: [{ forbiddenValues }],
        errors: [
          'don\'t hard code "/", replace to designated constant or function',
        ],
      },
      {
        name: "It is invalid, when defined string includes in forbiddenValues.",
        code: 'const searchHref = "/search"',
        options: [{ forbiddenValues }],
        errors: [
          'don\'t hard code "/search", replace to designated constant or function',
        ],
      },
    ],
  },
)
