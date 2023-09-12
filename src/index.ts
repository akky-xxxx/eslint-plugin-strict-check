import { Master } from "./masters/Master"
import { ReactMaster } from "./masters/ReactMaster"
import { VanillaMaster } from "./masters/VanillaMaster"
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
