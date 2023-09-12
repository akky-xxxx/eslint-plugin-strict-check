import { individualImport } from "../../../../src/rules/individual-import"
import { tester } from "../utils/tester"

import type { Option } from "../../../../src/rules/individual-import/types"

const targets = ["react"]

tester.run<string, Option[]>("individual-import", individualImport, {
  valid: [
    {
      name: "It is valid, when it is not property access from forbidden target.",
      code: "const [state, setState] = useState(1)",
      options: [{ targets }],
    },
    {
      name: "It is valid, when, it is property access from not forbidden target.",
      code: "const result = numbers.map((value) => String(value))",
      options: [{ targets }],
    },
    {
      name: "It is valid, when it is not property access at is types from forbidden target.",
      code: "const changeHandler: ChangeEventHandler = () => {}",
      options: [{ targets }],
    },
    {
      name: "It is valid, when it is not property access at JSX syntax from forbidden target.",
      code: "const Component = () => <Fragment>Component</Fragment>",
      options: [{ targets }],
    },
    {
      name: "It is valid, when it is property access that JSX syntax from not forbidden target.",
      code: "const Component = () => <Components.Component>Component</Components.Component>",
      options: [{ targets }],
    },
  ],
  invalid: [
    {
      name: "It is invalid, when it is property access from forbidden target.",
      code: "const [state, setState] = React.useState(1)",
      options: [{ targets }],
      errors: [
        'import "React.useState" as individually. example: import { useState } from "react"',
      ],
    },
    {
      name: "It is invalid, when it is property access that is types from forbidden target.",
      code: "const changeHandler: React.ChangeEventHandler = () => {}",
      options: [{ targets }],
      errors: [
        'import "React.ChangeEventHandler" as individually. example: import { ChangeEventHandler } from "react"',
      ],
    },
    {
      name: "It is valid, when it is property access at JSX syntax from forbidden target.",
      code: "const Component = () => <React.Fragment>Component</React.Fragment>",
      options: [{ targets }],
      errors: [
        'import "React.Fragment" as individually. example: import { Fragment } from "react"',
      ],
    },
  ],
})
