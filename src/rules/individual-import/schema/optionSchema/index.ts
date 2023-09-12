import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      targets: z.array(z.string()),
    }),
  )
  .length(ArrayLengths.ONE)
