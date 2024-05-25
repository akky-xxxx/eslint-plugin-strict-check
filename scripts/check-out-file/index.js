const { existsSync } = require("node:fs")

const result = existsSync("./out/index.js")

if (!result) throw new Error("Could not find out file.")

console.log("Could find out file.")
