import { eventHandlerPrefix } from "../../../../src/rules/event-handler-prefix"
import { tester } from "../utils/tester"

import type {
  MessageIdList,
  Option,
} from "../../../../src/rules/event-handler-prefix/types"

tester.run<MessageIdList, Option[]>(
  "event-handler-prefix",
  eventHandlerPrefix,
  {
    valid: [
      {
        code: "const handleGet = () => {}",
        options: [{ forbiddenPrefix: "on" }],
      },
      {
        code: "const onGet = () => {}",
        options: [{ forbiddenPrefix: "handle" }],
      },
      {
        code: "function handleGet() {}",
        options: [{ forbiddenPrefix: "on" }],
      },
      {
        code: "function onGet() {}",
        options: [{ forbiddenPrefix: "handle" }],
      },
    ],
    invalid: [
      {
        code: "const handleGet = () => {}",
        options: [{ forbiddenPrefix: "handle" }],
        errors: ['replace "handle" to "on" of handler prefix'],
      },
      {
        code: "const onGet = () => {}",
        options: [{ forbiddenPrefix: "on" }],
        errors: ['replace "on" to "handle" of handler prefix'],
      },
      {
        code: "function handleGet() {}",
        options: [{ forbiddenPrefix: "handle" }],
        errors: ['replace "handle" to "on" of handler prefix'],
      },
      {
        code: "function onGet() {}",
        options: [{ forbiddenPrefix: "on" }],
        errors: ['replace "on" to "handle" of handler prefix'],
      },
      {
        code: "const handleGet = () => {} // no option pattern",
        options: [],
        errors: [{ messageId: "NoOption" }],
      },
      {
        code: "function handleGet() {} // no option pattern",
        options: [],
        errors: [{ messageId: "NoOption" }],
      },
    ],
  },
)
