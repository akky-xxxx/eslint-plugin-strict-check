import { filePathPatterns } from "../../../../src/rules/file-path-patterns"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/file-path-patterns/types"

const RegularExpressions = {
  ATOMIC_DESIGN: /\/components\/atoms\/[A-Z][^.]+\./,
  ONLY_INDEX: /index(?:\.(?:stories|test))?\.tsx?/,
} satisfies Record<Uppercase<string>, RegExp>

tester.run<MessageIdList, Option[]>("file-path-patterns", filePathPatterns, {
  valid: [
    {
      code: "",
      filename: "/components/atoms/Button/index.tsx",
      options: [
        {
          allowPatterns: [
            RegularExpressions.ATOMIC_DESIGN,
            RegularExpressions.ONLY_INDEX,
          ],
        },
      ],
    },
    {
      code: "",
      filename: "index.ts",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
    },
    {
      code: "",
      filename: "index.tsx",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
    },
    {
      code: "",
      filename: "index.stories.tsx",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
    },
    {
      code: "",
      filename: "index.test.ts",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
    },
    {
      code: "",
      filename: "index.test.tsx",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
    },
  ],
  invalid: [
    {
      code: "",
      filename: "relatedComponents/atoms/button/index.tsx",
      errors: ["Not defined option."],
    },
    {
      code: "",
      filename: "relatedComponents/atoms/button/index.tsx",
      options: [{}],
      errors: ["Not defined option.allowPatterns."],
    },
    {
      code: "",
      filename: "relatedComponents/atoms/button/index.tsx",
      options: [
        {
          allowPatterns: [
            RegularExpressions.ATOMIC_DESIGN,
            RegularExpressions.ONLY_INDEX,
          ],
        },
      ],
      errors: ["Not matched filename to pattern."],
    },
    {
      code: "",
      filename: "/components/atoms/button/index.tsx",
      options: [
        {
          allowPatterns: [
            RegularExpressions.ATOMIC_DESIGN,
            RegularExpressions.ONLY_INDEX,
          ],
        },
      ],
      errors: ["Not matched filename to pattern."],
    },
    {
      code: "",
      filename: "/components/Button/index.tsx",
      options: [
        {
          allowPatterns: [
            RegularExpressions.ATOMIC_DESIGN,
            RegularExpressions.ONLY_INDEX,
          ],
        },
      ],
      errors: ["Not matched filename to pattern."],
    },
    {
      code: "",
      filename: "/components/Button.tsx",
      options: [
        {
          allowPatterns: [
            RegularExpressions.ATOMIC_DESIGN,
            RegularExpressions.ONLY_INDEX,
          ],
        },
      ],
      errors: ["Not matched filename to pattern."],
    },
    {
      code: "",
      filename: "types/Button.ts",
      options: [
        {
          allowPatterns: [RegularExpressions.ONLY_INDEX],
        },
      ],
      errors: ["Not matched filename to pattern."],
    },
  ],
})
