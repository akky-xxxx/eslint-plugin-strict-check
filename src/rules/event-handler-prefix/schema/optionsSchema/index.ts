import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    z.object({
      forbiddenPrefix: z.union([z.literal("handle"), z.literal("on")]),
    }),
  )
  .length(ArrayLengths.ONE)
