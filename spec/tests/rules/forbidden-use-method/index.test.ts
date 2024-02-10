import { forbiddenUseMethod } from "../../../../src/rules/forbidden-use-method"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/forbidden-use-method/types"

const RegularExpression =
  /\/components\/(?:molecules|organisms|templates)\/[^/]+\/index.tsx$/

const options = [
  {
    allowPatterns: [RegularExpression],
    methods: ["useState"],
  },
] as const satisfies Option[]

tester.run<MessageId, Option[]>("forbidden-use-method", forbiddenUseMethod, {
  valid: [
    {
      code: 'import { memo } from "react"',
      filename: "/components/molecules/Button/index.tsx",
      options,
    },
    {
      code: 'import { useState } from "react"',
      filename: "/components/molecules/Button/index.tsx",
      options,
    },
    {
      code: 'import { memo } from "./modules/useCustomHook"',
      filename: "/components/organisms/Button/index.tsx",
      options,
    },
    {
      code: 'import { useCustomHook } from "./modules/useCustomHook"',
      filename: "/components/organisms/Button/index.tsx",
      options,
    },
    {
      code: 'import { memo } from "./modules/useCustomHook"',
      filename: "/components/templates/Button/index.tsx",
      options,
    },
  ],
  invalid: [
    {
      code: 'import { useState, memo } from "react"',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useState",
          },
          messageId: "ImportedForbiddenMethod",
        },
      ],
    },
    {
      code: 'import { useState } from "react"',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useState",
          },
          messageId: "ImportedForbiddenMethod",
        },
      ],
    },
    {
      code: 'import { useCustomHook, memo } from "./modules/useCustomHook"',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useCustomHook",
          },
          messageId: "ImportedForbiddenMethod",
        },
      ],
    },
    {
      code: 'import { useCustomHook } from "./modules/useCustomHook"',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useCustomHook",
          },
          messageId: "ImportedForbiddenMethod",
        },
      ],
    },
    {
      code: 'const state = React.useState("")',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useState",
          },
          messageId: "UsedForbiddenMethod",
        },
      ],
    },
    {
      code: 'const state = useState("")',
      filename: "/components/atoms/Button/View.tsx",
      options,
      errors: [
        {
          data: {
            hooksName: "useState",
          },
          messageId: "UsedForbiddenMethod",
        },
      ],
    },
  ],
})
