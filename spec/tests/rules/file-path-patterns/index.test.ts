import { filePathPatterns } from "../../../../src/rules/file-path-patterns"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/file-path-patterns/types"

const RegularExpressions = {
  ATOMIC_DESIGN:
    /\/components\/atoms\/[A-Z][^.]+\/index(?:\.(?:stories|test))?\.tsx?/,
  TYPES: /\/@types\/[^/]+\/[^.]+\.d\.ts/,
} satisfies Record<Uppercase<string>, RegExp>

const options = [
  {
    allowPatterns: [RegularExpressions.ATOMIC_DESIGN, RegularExpressions.TYPES],
  },
]

tester.run<MessageIdList, Option[]>("file-path-patterns", filePathPatterns, {
  valid: [
    {
      code: 'console.log("valid pattern1")',
      filename: "/components/atoms/Button/index.tsx",
      options,
    },
    {
      code: 'console.log("valid pattern2")',
      filename: "/components/atoms/Button/index.ts",
      options,
    },
    {
      code: 'console.log("valid pattern3")',
      filename: "/components/atoms/Button/index.tsx",
      options,
    },
    {
      code: 'console.log("valid pattern4")',
      filename: "/components/atoms/Button/index.stories.tsx",
      options,
    },
    {
      code: 'console.log("valid pattern5")',
      filename: "/components/atoms/Button/index.test.ts",
      options,
    },
    {
      code: 'console.log("valid pattern6")',
      filename: "/components/atoms/Button/index.test.tsx",
      options,
    },
    {
      code: 'console.log("valid pattern7")',
      filename: "/@types/type/button.d.ts",
      options,
    },
  ],
  invalid: [
    {
      code: 'console.log("invalid pattern1")',
      filename: "relatedComponents/atoms/button/index.tsx",
      errors: ["Not defined option."],
    },
    {
      code: 'console.log("invalid pattern2")',
      filename: "relatedComponents/atoms/button/index.tsx",
      options: [{}],
      errors: ["Not defined option.allowPatterns."],
    },
    {
      code: 'console.log("invalid pattern3")',
      filename: "relatedComponents/atoms/button/index.tsx",
      options,
      errors: ["Not matched filename to pattern."],
    },
    {
      code: 'console.log("invalid pattern4")',
      filename: "/components/atoms/button/index.tsx",
      options,
      errors: ["Not matched filename to pattern."],
    },
    {
      code: 'console.log("invalid pattern5")',
      filename: "/components/Button/index.tsx",
      options,
      errors: ["Not matched filename to pattern."],
    },
    {
      code: 'console.log("invalid pattern6")',
      filename: "/components/Button.tsx",
      options,
      errors: ["Not matched filename to pattern."],
    },
    {
      code: 'console.log("invalid pattern7")',
      filename: "/components/types/Button.ts",
      options,
      errors: ["Not matched filename to pattern."],
    },
  ],
})
