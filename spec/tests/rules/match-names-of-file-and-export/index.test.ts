import { matchNamesOfFileAndExport } from "../../../../src/rules/match-names-of-file-and-export"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/match-names-of-file-and-export/types"

const correctOptions: Option[] = [
  {
    captures: [
      /\/components\/(?:atoms|molecules|organisms|templates)\/([^/]+)\/index.tsx/,
      /\/modules\/([^/]+)\/index.ts/,
    ],
  },
]

const incorrectOptions: Option[] = [
  {
    captures: [
      /\/components\/atoms\/[^/]+\/index.tsx/,
      /\/modules\/[^/]+\/index.ts/,
    ],
  },
]

tester.run<MessageId, Option[]>(
  "match-names-of-file-and-export",
  matchNamesOfFileAndExport,
  {
    valid: [
      {
        code: "export const Button: FC<> = () => {};",
        filename: "/components/atoms/Button/index.tsx",
        options: correctOptions,
      },
      {
        code: "export const useButton = () => {}",
        filename: "/components/atoms/Button/modules/useButton/index.ts",
        options: correctOptions,
      },
    ],
    invalid: [
      {
        code: "export const button = () => {}",
        filename: "/components/atoms/Button/index.tsx",
        options: correctOptions,
        errors: [
          {
            data: {
              filepath: "/components/atoms/Button/index.tsx",
              variableName: "button",
            },
            messageId: "FileAndExportAreDifferent",
          },
        ],
      },
      {
        code: "export const useButtonHooks = () => {}",
        filename: "/components/atoms/Button/modules/useButton/index.ts",
        options: incorrectOptions,
        errors: [
          {
            data: {
              filepath: "/components/atoms/Button/modules/useButton/index.ts",
              variableName: "useButtonHooks",
            },
            messageId: "FileAndExportAreDifferent",
          },
        ],
      },
      {
        code: "export const useButtonHooks = () => {}",
        filename: "/components/atoms/Button/modules/useButton/index.ts",
        options: correctOptions,
        errors: [
          {
            data: {
              filepath: "/components/atoms/Button/modules/useButton/index.ts",
              variableName: "useButtonHooks",
            },
            messageId: "FileAndExportAreDifferent",
          },
        ],
      },
    ],
  },
)
