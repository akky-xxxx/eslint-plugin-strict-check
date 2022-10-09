import { individualImport } from "../../../../src/rules/individual-import"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/individual-import/types"

const targets = ["react"]

tester.run<MessageIdList, Option[]>("individual-import", individualImport, {
  valid: [
    {
      code: "const [state, setState] = useState(1)",
      options: [{ targets }],
    },
    {
      code: "const result = numbers.map((value) => String(value))",
      options: [{ targets }],
    },
    {
      code: "const changeHandler: ChangeEventHandler = () => {}",
      options: [{ targets }],
    },
    {
      code: "const Component = () => <Fragment>Component</Fragment>",
      options: [{ targets }],
    },
    {
      code: "const Component = () => <Components.Component>Component</Components.Component>",
      options: [{ targets }],
    },
  ],
  invalid: [
    {
      code: "const [state, setState] = React.useState(1)",
      options: [{ targets }],
      errors: [
        'import "React.useState" as individually. example: import { useState } from "react"',
      ],
    },
    {
      code: "const changeHandler: React.ChangeEventHandler = () => {}",
      options: [{ targets }],
      errors: [
        'import "React.ChangeEventHandler" as individually. example: import { ChangeEventHandler } from "react"',
      ],
    },
    {
      code: "const Component = () => <React.Fragment>Component</React.Fragment>",
      options: [{ targets }],
      errors: [
        'import "React.Fragment" as individually. example: import { Fragment } from "react"',
      ],
    },
    {
      code: "const [state, setState] = React.useState(1)",
      options: [],
      errors: [
        { messageId: "NoOption" },
        { messageId: "NoOption" },
        { messageId: "NoOption" },
        { messageId: "NoOption" },
        { messageId: "NoOption" },
      ],
    },
    {
      code: "const Component = () => <React.Fragment>Component</React.Fragment>",
      options: [],
      errors: [{ messageId: "NoOption" }, { messageId: "NoOption" }],
    },
  ],
})
