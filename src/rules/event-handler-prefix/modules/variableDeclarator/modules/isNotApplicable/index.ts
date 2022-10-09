import type { TSESTree } from "@typescript-eslint/utils"

export const isNotApplicable =
  (forbiddenPrefix: string) => (node: TSESTree.VariableDeclarator) =>
    node.init === null ||
    node.init.type !== "ArrowFunctionExpression" ||
    node.id.type !== "Identifier" ||
    !node.id.name.startsWith(forbiddenPrefix)
