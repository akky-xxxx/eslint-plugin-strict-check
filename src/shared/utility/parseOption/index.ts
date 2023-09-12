import { ZodError } from "zod"

import type { ZodType } from "zod"

export const parseOption = <T>(option: unknown, schema: ZodType<T>): T => {
  try {
    return schema.parse(option)
  } catch (error: unknown) {
    if (!(error instanceof ZodError)) {
      throw error
    }
    throw new Error("Invalid options, please check it.")
  }
}
