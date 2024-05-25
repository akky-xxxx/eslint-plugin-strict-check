const eslintOverrides = [
  {
    files: ["**/*.test.*"],
    rules: {
      "implicit-arrow-linebreak": 0,
    },
  },
]

module.exports = {
  eslintOverrides,
}
