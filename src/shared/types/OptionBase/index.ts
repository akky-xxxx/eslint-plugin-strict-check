export type OptionBase<O extends Record<string, unknown>> = {
  [K in keyof O]?: O[K] | unknown
}
