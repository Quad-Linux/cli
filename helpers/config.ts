import { homedir } from "os"
import { join } from "path"

export const getConfigDir = () => join(homedir(), ".config", "quados")

export const getPackages = () => join(getConfigDir(), "packages.ts")

export const getConfig = () => join(getConfigDir(), "config.js")
