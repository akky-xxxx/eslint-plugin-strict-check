import { exportNamedDeclaration } from "../../../../src/rules/match-names-of-file-and-export/modules/exportNamedDeclaration"

const getFilename = () => ""

describe("exportNamedDeclaration", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      exportNamedDeclaration({
        getFilename,
        options: [],
      }),
    ).toThrow("Not defined option.")
  })

  it("Not defined option.captures", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      exportNamedDeclaration({
        getFilename,
        options: [{}],
      }),
    ).toThrow("Not defined option.captures.")
  })
})
