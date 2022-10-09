type GetErrorMessage = (moduleName: string, propertyName: string) => string

export const getErrorMessage: GetErrorMessage = (moduleName, propertyName) =>
  `import "${moduleName}.${propertyName}" as individually. example: import { ${propertyName} } from "${moduleName.toLowerCase()}"`
