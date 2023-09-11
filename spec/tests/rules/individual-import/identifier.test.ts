import { identifier } from "../../../../src/rules/individual-import/modules/identifier"

describe("individual-import.identifier", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      identifier({
        options: [],
      }),
    ).toThrow("Not defined option.")
  })

  it("Not defined option.targets", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      identifier({
        options: [{}],
      }),
    ).toThrow("Not defined option.targets.")
  })
})
