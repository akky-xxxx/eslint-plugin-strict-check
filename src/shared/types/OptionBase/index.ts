export type OptionBase<O extends Record<string, unknown>> = {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  [K in keyof O]?: O[K] | unknown
}
