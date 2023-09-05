import { forbiddenMultipleNamedExports } from "../../../../src/rules/forbidden-multiple-named-exports"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/forbidden-multiple-named-exports/types"

tester.run<MessageIdList, Option[]>(
  "forbidden-multiple-named-exports",
  forbiddenMultipleNamedExports,
  {
    valid: [
      {
        code: "export const One = 1;",
      },
    ],
    invalid: [
      {
        code: "export const One = 1; export const Two = 2; export default 3; export const Four = 4;",
        filename: "relatedComponents/atoms/button/index.tsx",
        errors: [
          "Reduce the export to one time.",
          "Reduce the export to one time.",
        ],
      },
      {
        code: "export const One = 1; export const Two = 2;",
        filename: "relatedComponents/atoms/button/index.tsx",
        errors: ["Reduce the export to one time."],
      },
    ],
  },
)
