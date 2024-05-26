import { program } from "../../../../src/rules/file-path-patterns/modules/program"

describe("file-path-patterns.program", () => {
  it("Not defined option", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      program({
        options: [],
      })).toThrow("Invalid options, please check it.")
  })

  it("Not defined option.allowPatterns", () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      program({
        options: [{}],
      })).toThrow("Invalid options, please check it.")
  })
})
