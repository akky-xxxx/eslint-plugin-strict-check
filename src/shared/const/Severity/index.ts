export const Severity = {
  OFF: 0,

  WARN: 1,

  ERROR: 2,
} as const satisfies Record<string, number>
