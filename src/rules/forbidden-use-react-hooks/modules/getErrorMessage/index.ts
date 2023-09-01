type GetErrorMessage = (action: string, hooksName: string) => string

export const getErrorMessage: GetErrorMessage = (action, hooksName) =>
  `Don't ${action} the react hooks ( ${hooksName} ) in the component that only viewing.`
