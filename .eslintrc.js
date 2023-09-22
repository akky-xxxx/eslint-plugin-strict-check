module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: ["strict-check/typescript"],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
  rules: {
    "@typescript-eslint/no-unsafe-enum-comparison": 0,
  },
}
