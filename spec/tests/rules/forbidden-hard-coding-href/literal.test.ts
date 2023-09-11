import { literal } from "../../../../src/rules/forbidden-hard-coding-href/modules/literal"

describe("forbidden-hard-coding-href.literal", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      literal({
        options: [],
      }),
    ).toThrow("Not defined option.")
  })

  it("Not defined option.forbiddenValues", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      literal({
        options: [{}],
      }),
    ).toThrow("Not defined option.forbiddenValues.")
  })
})
