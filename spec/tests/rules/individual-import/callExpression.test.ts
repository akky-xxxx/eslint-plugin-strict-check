import { callExpression } from "../../../../src/rules/individual-import/modules/callExpression"

describe("individual-import.callExpression", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callExpression({
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.targets", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callExpression({
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
