import { eventHandlerPrefix } from "../../../../src/rules/event-handler-prefix"
import { tester } from "../utils/tester"

import type { Option } from "../../../../src/rules/event-handler-prefix/types"

tester.run<string, Option[]>("event-handler-prefix", eventHandlerPrefix, {
  valid: [
    {
      name: 'It is valid, when "on" specify to forbiddenPrefix, prefix of variable name is "handle".',
      code: "const handleGet = () => {}",
      options: [{ forbiddenPrefix: "on" }],
    },
    {
      name: 'It is valid, when "handle" specify to forbiddenPrefix, prefix of variable name is "on".',
      code: "const onGet = () => {}",
      options: [{ forbiddenPrefix: "handle" }],
    },
    {
      name: 'It is valid, when "on" specify to forbiddenPrefix, prefix of function name is "handle".',
      code: "function handleGet() {}",
      options: [{ forbiddenPrefix: "on" }],
    },
    {
      name: 'It is valid, when "handle" specify to forbiddenPrefix, prefix of function name is "on".',
      code: "function onGet() {}",
      options: [{ forbiddenPrefix: "handle" }],
    },
  ],
  invalid: [
    {
      name: 'It is invalid, when "handle" specify to forbiddenPrefix, prefix of variable name is "handle".',
      code: "const handleGet = () => {}",
      options: [{ forbiddenPrefix: "handle" }],
      errors: ['replace "handle" to "on" of handler prefix'],
    },
    {
      name: 'It is invalid, when "on" specify to forbiddenPrefix, prefix of variable name is "on".',
      code: "const onGet = () => {}",
      options: [{ forbiddenPrefix: "on" }],
      errors: ['replace "on" to "handle" of handler prefix'],
    },
    {
      name: 'It is invalid, when "handle" specify to forbiddenPrefix, prefix of function name is "handle".',
      code: "function handleGet() {}",
      options: [{ forbiddenPrefix: "handle" }],
      errors: ['replace "handle" to "on" of handler prefix'],
    },
    {
      name: 'It is invalid, when "on" specify to forbiddenPrefix, prefix of function name is "on".',
      code: "function onGet() {}",
      options: [{ forbiddenPrefix: "on" }],
      errors: ['replace "on" to "handle" of handler prefix'],
    },
  ],
})
