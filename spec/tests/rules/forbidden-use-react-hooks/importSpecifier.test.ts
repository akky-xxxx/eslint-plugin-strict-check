import { importSpecifier } from "../../../../src/rules/forbidden-use-react-hooks/modules/importSpecifier"

describe("forbidden-use-react-hooks.importSpecifier", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      importSpecifier({
        options: [],
      }),
    ).toThrow("Not defined option.")
  })

  it("Not defined option.allowPatterns", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      importSpecifier({
        options: [{}],
      }),
    ).toThrow("Not defined option.allowPatterns.")
  })
})
