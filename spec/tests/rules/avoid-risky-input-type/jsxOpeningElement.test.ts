import { jsxOpeningElement } from "../../../../src/rules/avoid-risky-input-type/modules/jsxOpeningElement"

describe("avoid-risky-input-type.jsxOpeningElement", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jsxOpeningElement({
        options: [],
      }),
    ).toThrow("Not defined option.")
  })

  it("Not defined option.riskyValues", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jsxOpeningElement({
        options: [{}],
      }),
    ).toThrow("Not defined option.riskyValues.")
  })
})
