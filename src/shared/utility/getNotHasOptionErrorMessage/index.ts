export const getNotHasOptionErrorMessage = (targetOption?: string) => {
  const target = ["option", targetOption].filter(Boolean).join(".")
  return `Not defined ${target}.`
}
