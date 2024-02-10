import { z } from "zod"

import { ArrayLengths } from "../../../../shared/const/ArrayLengths"

export const optionsSchema = z
  .array(
    // 異なるプロパティ名を持った object の union を zod で簡単に判定できないため optional で代用
    z.object({
      allowPatterns: z.array(z.instanceof(RegExp)).optional(),
      disallowPatterns: z.array(z.instanceof(RegExp)).optional(),
    }),
  )
  .length(ArrayLengths.ONE)
