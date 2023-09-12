import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      captures: z.array(z.instanceof(RegExp)),
    }),
  )
  .length(ArrayLengths.ONE)
