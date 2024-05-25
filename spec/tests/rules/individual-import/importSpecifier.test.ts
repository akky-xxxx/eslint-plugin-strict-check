import { jsxOpeningElement } from "../../../../src/rules/individual-import/modules/jSXOpeningElement"

describe("individual-import.jsxOpeningElement", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jsxOpeningElement({
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.targets", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jsxOpeningElement({
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
