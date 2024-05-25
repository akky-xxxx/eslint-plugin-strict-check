import { forbiddenUseReactHooks } from "../../../../src/rules/forbidden-use-react-hooks"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/forbidden-use-react-hooks/types"

const allowPatternOptions = [
  {
    allowPatterns: [
      /\/components\/(?:molecules|organisms|templates)\/[^/]+\/index.tsx$/,
    ],
  },
]

const disallowPatternOptions = [
  {
    disallowPatterns: [
      /\/components\/(?:molecules|organisms|templates)\/[^/]+\/View.tsx$/,
    ],
  },
]

tester.run<MessageId, Option[]>(
  "forbidden-use-react-hooks",
  forbiddenUseReactHooks,
  {
    valid: [
      // allow patterns
      {
        code: "import { memo } from \"react\" // on allowPatterns",
        filename: "/components/molecules/Button/index.tsx",
        options: allowPatternOptions,
      },
      {
        code: "import { useState } from \"react\" // on allowPatterns",
        filename: "/components/molecules/Button/index.tsx",
        options: allowPatternOptions,
      },
      {
        code: "import { memo } from \"./modules/useCustomHook\" // on allowPatterns",
        filename: "/components/organisms/Button/index.tsx",
        options: allowPatternOptions,
      },
      {
        code: "import { useCustomHook } from \"./modules/useCustomHook\" // on allowPatterns",
        filename: "/components/organisms/Button/index.tsx",
        options: allowPatternOptions,
      },
      {
        code: "import { memo } from \"./modules/useCustomHook\" // on allowPatterns",
        filename: "/components/templates/Button/index.tsx",
        options: allowPatternOptions,
      },
      // disallow patterns
      {
        code: "import { memo } from \"react\" // on disallowPatterns",
        filename: "/components/molecules/Button/index.tsx",
        options: disallowPatternOptions,
      },
      {
        code: "import { useState } from \"react\" // on disallowPatterns",
        filename: "/components/molecules/Button/index.tsx",
        options: disallowPatternOptions,
      },
      {
        code: "import { memo } from \"./modules/useCustomHook\" // on disallowPatterns",
        filename: "/components/organisms/Button/index.tsx",
        options: disallowPatternOptions,
      },
      {
        code: "import { useCustomHook } from \"./modules/useCustomHook\" // on disallowPatterns",
        filename: "/components/organisms/Button/index.tsx",
        options: disallowPatternOptions,
      },
      {
        code: "import { memo } from \"./modules/useCustomHook\" // on disallowPatterns",
        filename: "/components/templates/Button/index.tsx",
        options: disallowPatternOptions,
      },
    ],
    invalid: [
      // allow pattern
      {
        code: "import { useState, memo } from \"react\" // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
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
        code: "import { useState } from \"react\" // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
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
        code: "import { useCustomHook, memo } from \"./modules/useCustomHook\" // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
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
        code: "import { useCustomHook } from \"./modules/useCustomHook\" // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
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
        code: "const state = React.useState(\"\") // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
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
        code: "const state = useState(\"\") // on allowPatterns",
        filename: "/components/atoms/Button/index.tsx",
        options: allowPatternOptions,
        errors: [
          {
            data: {
              hooksName: "useState",
            },
            messageId: "UsedReactHooks",
          },
        ],
      },
      // disallow patterns
      {
        code: "import { useState, memo } from \"react\" // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
        code: "import { useState } from \"react\" // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
        code: "import { useCustomHook, memo } from \"./modules/useCustomHook\" // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
        code: "import { useCustomHook } from \"./modules/useCustomHook\" // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
        code: "const state = React.useState(\"\") // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
        code: "const state = useState(\"\") // on disallowPatterns",
        filename: "/components/molecules/Button/View.tsx",
        options: disallowPatternOptions,
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
