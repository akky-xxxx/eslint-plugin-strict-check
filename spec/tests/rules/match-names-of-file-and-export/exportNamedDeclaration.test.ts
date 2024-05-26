import { exportNamedDeclaration } from "../../../../src/rules/match-names-of-file-and-export/modules/exportNamedDeclaration"

const getFilename = () => ""

describe("match-names-of-file-and-export.exportNamedDeclaration", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      exportNamedDeclaration({
        getFilename,
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.captures", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      exportNamedDeclaration({
        getFilename,
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
