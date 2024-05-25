import { forbiddenHardCodingHref } from "../../../../src/rules/forbidden-hard-coding-href"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/forbidden-hard-coding-href/types"

const forbiddenValues = ["/", "/search"]

tester.run<MessageId, Option[]>(
  "forbidden-hard-coding-href",
  forbiddenHardCodingHref,
  {
    valid: [
      {
        name: "It is valid, when defined string does not include in forbiddenValues.",
        code: "const href = \"age\"",
        options: [{ forbiddenValues }],
      },
    ],
    invalid: [
      {
        name: "It is invalid, when used string includes in forbidden Values, on JSX syntax.",
        code: "const Component = () => <a href=\"/\">top</a>",
        options: [{ forbiddenValues }],
        errors: [
          {
            data: {
              href: "/",
            },
            messageId: "HardCoded",
          },
        ],
      },
      {
        name: "It is invalid, when defined string includes in forbiddenValues.",
        code: "const searchHref = \"/search\"",
        options: [{ forbiddenValues }],
        errors: [
          {
            data: {
              href: "/search",
            },
            messageId: "HardCoded",
          },
        ],
      },
    ],
  },
)
