const fs = require("fs")
const childProcess = require("child_process")

const currentBranch = childProcess
  .execSync('git branch -l | sed -e "/^[^*] /d"')
  .toString()
  .replace("*", "")
  .trim()

if (currentBranch !== "main") {
  console.log("Do tagging at main branch.")
  process.exit(1)
  return
}

const packageJson = JSON.parse(fs.readFileSync("package.json").toString())
const version = `v${packageJson.version}`
const commands = [`git tag ${version}`, `git push origin tags/${version}`]

commands.forEach((command) => {
  childProcess.execSync(command)
})
