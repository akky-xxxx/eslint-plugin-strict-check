import { importSpecifier } from "../../../../src/rules/forbidden-use-react-hooks/modules/importSpecifier"

describe("forbidden-use-react-hooks.importSpecifier", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      importSpecifier({
        options: [],
      }),
    ).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.allowPatterns", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      importSpecifier({
        options: [{}],
      }),
    ).toThrow(
      "Define the only one property, from allowPatterns or disallowPatterns.",
    )
  })

  it("Defined both allowPatterns, disallowPatterns", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      importSpecifier({
        options: [
          {
            allowPatterns: [],
            disallowPatterns: [],
          },
        ],
      }),
    ).toThrow(
      "Define the only one property, from allowPatterns or disallowPatterns.",
    )
  })
})
