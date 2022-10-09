type HasTarget = (targets: string[], propertyName: string) => boolean

export const hasTarget: HasTarget = (targets, propertyName) =>
  targets
    .map((target) => target.toLowerCase())
    .includes(propertyName.toLowerCase())
