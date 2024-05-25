const stylisticOverrides = [
  {
    files: ["**/*.test.*"],
    rules: {
      "@stylistic/max-len": 0,
    },
  },
]

module.exports = {
  stylisticOverrides,
}
