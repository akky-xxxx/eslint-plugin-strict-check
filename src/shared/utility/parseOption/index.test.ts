import { z } from "zod"

import { parseOption } from "./index"

const schema = z.array(z.string())

describe("parseOption", () => {
  it("when option is valid, return parsed data", () => {
    const option = [""]
    expect(parseOption(option, schema)).toBe([""])
  })

  it("when option is invalid, and error is ZodError, throw error message", () => {
    const option = [0]
    expect(() => parseOption(option, schema)).toThrow(
      "Invalid options, please check it.",
    )
  })
})
