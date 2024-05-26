const memberDelimiterStyle = [
  2,
  {
    multiline: {
      delimiter: "none",
    },
    singleline: {
      delimiter: "semi",
    },
  },
]
const operatorLinebreak = [
  1,
  "after",
  {
    overrides: {
      ":": "ignore",
      "?": "ignore",
    },
  },
]

export const stylisticRules = {
  "@stylistic/arrow-parens": [2, "always"],
  "@stylistic/brace-style": [2, "1tbs"],
  "@stylistic/max-len": [1, { code: 100 }],
  "@stylistic/member-delimiter-style": memberDelimiterStyle,
  "@stylistic/operator-linebreak": operatorLinebreak,
  "@stylistic/quotes": [2, "double"],
  "@stylistic/semi": [2, "never"],
}
