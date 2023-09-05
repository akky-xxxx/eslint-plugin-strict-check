import { matchNamesOfFileAndExport } from "../../../../src/rules/match-names-of-file-and-export"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
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

tester.run<MessageIdList, Option[]>(
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
        code: "export const Button = () => {}",
        filename: "/components/atoms/Button.tsx",
        options: correctOptions,
        errors: ["Not exist matched filename by capture."],
      },
      {
        code: "export const button = () => {}",
        filename: "/components/atoms/Button/index.tsx",
        options: correctOptions,
        errors: [
          'Not matched names of file and export. File name is "Button", variable name is "button".',
        ],
      },
      {
        code: "export const useButtonHooks = () => {}",
        filename: "/components/atoms/Button/modules/useButton.ts",
        options: correctOptions,
        errors: ["Not exist matched filename by capture."],
      },
      {
        code: "export const useButtonHooks = () => {}",
        filename: "/components/atoms/Button/modules/useButton/index.ts",
        options: incorrectOptions,
        errors: ["Not exist capture in the regular expressions."],
      },
      {
        code: "export const useButtonHooks = () => {}",
        filename: "/components/atoms/Button/modules/useButton/index.ts",
        options: correctOptions,
        errors: [
          'Not matched names of file and export. File name is "useButton", variable name is "useButtonHooks".',
        ],
      },
    ],
  },
)
