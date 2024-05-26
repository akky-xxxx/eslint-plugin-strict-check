import { functionDeclaration } from "../../../../src/rules/event-handler-prefix/modules/functionDeclaration"

describe("event-handler-prefix.functionDeclaration", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      functionDeclaration({
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.forbiddenPrefix", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      functionDeclaration({
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
