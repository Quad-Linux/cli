import { homedir } from "os"
import { join } from "path"

export const getConfigDir = () => join(join(homedir(), ".config"), "quados")

export const getPackages = () => join(getConfigDir(), "packages.ts")
