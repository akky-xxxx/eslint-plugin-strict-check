import { forbiddenUseReactHooks } from "../../../../src/rules/forbidden-use-react-hooks"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/forbidden-use-react-hooks/types"

const RegularExpression =
  /\/components\/(?:molecules|organisms|templates)\/[^/]+\/View.tsx/

const options = [
  {
    allowPatterns: [RegularExpression],
  },
]

tester.run<MessageId, Option[]>(
  "forbidden-use-react-hooks",
  forbiddenUseReactHooks,
  {
    valid: [
      {
        code: 'import { memo } from "react"',
        filename: "/components/molecules/Button/View.tsx",
        options,
      },
      {
        code: 'import { memo } from "./modules/useCustomHook"',
        filename: "/components/organisms/Button/View.tsx",
        options,
      },
      {
        code: 'import { memo } from "./modules/useCustomHook"',
        filename: "/components/templates/Button/View.tsx",
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
            messageId: "ImportedReactHooks",
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
            messageId: "ImportedReactHooks",
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
            messageId: "ImportedReactHooks",
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
            messageId: "ImportedReactHooks",
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
            messageId: "UsedReactHooks",
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
            messageId: "UsedReactHooks",
          },
        ],
      },
    ],
  },
)
