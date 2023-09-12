import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      riskyValues: z.array(z.string()),
    }),
  )
  .length(ArrayLengths.ONE)
