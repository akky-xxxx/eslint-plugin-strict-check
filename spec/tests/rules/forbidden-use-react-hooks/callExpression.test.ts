import { callExpression } from "../../../../src/rules/forbidden-use-react-hooks/modules/callExpression"

describe("forbidden-use-react-hooks.callExpression", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callExpression({
        options: [],
      }),
    ).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.allowPatterns", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callExpression({
        options: [{}],
      }),
    ).toThrow("Invalid options, please check it.")
  })
})
