import { forbiddenUseReactHooks } from "../../../../src/rules/forbidden-use-react-hooks"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/forbidden-use-react-hooks/types"

const RegularExpression =
  /\/components\/(?:molecules|organisms|templates)\/[^/]+\/View.tsx/

const options = [
  {
    allowPatterns: [RegularExpression],
  },
]

tester.run<MessageIdList, Option[]>(
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
        code: 'import { memo } from "react"',
        filename: "/components/molecules/Button/View.tsx",
        errors: ["Not defined option."],
      },
      {
        code: 'import { memo } from "react"',
        filename: "/components/molecules/Button/View.tsx",
        options: [{}],
        errors: ["Not defined option.allowPatterns."],
      },
      {
        code: 'import { useState, memo } from "react"',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't import the react hooks ( useState ) in the component that only viewing.",
        ],
      },
      {
        code: 'import { useState, memo } from "react"',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't import the react hooks ( useState ) in the component that only viewing.",
        ],
      },
      {
        code: 'import { useState } from "react"',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't import the react hooks ( useState ) in the component that only viewing.",
        ],
      },
      {
        code: 'import { useCustomHook, memo } from "./modules/useCustomHook"',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't import the react hooks ( useCustomHook ) in the component that only viewing.",
        ],
      },
      {
        code: 'import { useCustomHook } from "./modules/useCustomHook"',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't import the react hooks ( useCustomHook ) in the component that only viewing.",
        ],
      },
      {
        code: 'const state = React.useState("")',
        filename: "/components/atoms/Button/View.tsx",
        errors: ["Not defined option."],
      },
      {
        code: 'const state = React.useState("")',
        filename: "/components/atoms/Button/View.tsx",
        options: [{}],
        errors: ["Not defined option.allowPatterns."],
      },
      {
        code: 'const state = React.useState("")',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't use the react hooks ( useState ) in the component that only viewing.",
        ],
      },
      {
        code: 'const state = useState("")',
        filename: "/components/atoms/Button/View.tsx",
        options,
        errors: [
          "Don't use the react hooks ( useState ) in the component that only viewing.",
        ],
      },
    ],
  },
)
