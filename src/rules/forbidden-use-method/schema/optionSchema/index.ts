import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      allowPatterns: z.array(z.instanceof(RegExp)).optional(),
      disallowPatterns: z.array(z.instanceof(RegExp)).optional(),
      methods: z.array(z.string()),
    }),
  )
  .length(ArrayLengths.ONE)
