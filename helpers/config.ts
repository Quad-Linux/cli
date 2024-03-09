import { homedir } from "os"
import { join } from "path"

export const getConfigDir = () =>
    `${process.env.XDG_CONFIG_HOME ?? `${homedir()}/.config`}/quados`

export const getPackages = () => join(getConfigDir(), "packages.ts")
