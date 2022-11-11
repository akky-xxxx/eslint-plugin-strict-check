import { VanillaMaster } from "./const/VanillaMaster"
import { Master } from "./const/master"
import { ReactMaster } from "./const/reactMaster"
import { getConfig } from "./modules/getConfig"
import { getRules } from "./modules/getRules"

const rules = Master.reduce(getRules, {})

const react = getConfig(ReactMaster)
const vanilla = getConfig(VanillaMaster)

export = {
  configs: {
    react,
    vanilla,
  },
  rules,
}
