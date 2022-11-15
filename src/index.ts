import { Master } from "./const/Master"
import { ReactMaster } from "./const/ReactMaster"
import { VanillaMaster } from "./const/VanillaMaster"
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
