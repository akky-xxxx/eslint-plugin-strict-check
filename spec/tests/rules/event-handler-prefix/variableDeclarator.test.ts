import { variableDeclarator } from "../../../../src/rules/event-handler-prefix/modules/variableDeclarator"

describe("event-handler-prefix.variableDeclarator", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variableDeclarator({
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.forbiddenPrefix", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variableDeclarator({
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
