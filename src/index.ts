import { Master } from "./masters/Master"
import { ReactMaster } from "./masters/ReactMaster"
import { VanillaMaster } from "./masters/VanillaMaster"
import { getFlatConfig } from "./modules/getFlatConfig"
import { getLegacyConfig } from "./modules/getLegacyConfig"
import { getRules } from "./modules/getRules"

const rules = Master.reduce(getRules, {})

const plugin = {
  configs: {},
  rules,
}

plugin.configs = {
  "legacy-react": getLegacyConfig(ReactMaster),
  "legacy-vanilla": getLegacyConfig(VanillaMaster),
  "react": getFlatConfig(plugin, ReactMaster),
  "vanilla": getFlatConfig(plugin, VanillaMaster),
}

export = plugin
