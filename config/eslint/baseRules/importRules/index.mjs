const order = [
  2,
  {
    "newlines-between": "always",

    "alphabetize": { order: "asc" },

    "groups": [
      ["builtin", "external"],
      "internal",
      ["parent", "sibling", "index"],
      "object",
      "type",
    ],
  },
]

export const importRules = {
  "import/extensions": [2, { js: "never", ts: "never" }],
  "import/no-default-export": 2,
  "import/order": order,
  "import/prefer-default-export": 0,
}
