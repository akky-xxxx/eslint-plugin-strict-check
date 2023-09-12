import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      forbiddenValues: z.array(z.string()),
    }),
  )
  .length(ArrayLengths.ONE)
