import { forbiddenHardCodingHref } from "../../../../src/rules/forbidden-hard-coding-href"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/forbidden-hard-coding-href/types"

const forbiddenValues = ["/", "/search"]

tester.run<MessageIdList, Option[]>(
  "forbidden-hard-coding-href",
  forbiddenHardCodingHref,
  {
    valid: [
      {
        code: 'const href = "age"',
        options: [{ forbiddenValues }],
      },
    ],
    invalid: [
      {
        code: 'const Component = () => <a href="/">top</a>',
        options: [{ forbiddenValues }],
        errors: [
          'don\'t hard code "/", replace to designated constant or function',
        ],
      },
      {
        code: 'const searchHref = "/search"',
        options: [{ forbiddenValues }],
        errors: [
          'don\'t hard code "/search", replace to designated constant or function',
        ],
      },
      {
        code: 'const href = "/"',
        options: [],
        errors: [{ messageId: "NoOption" }],
      },
    ],
  },
)
