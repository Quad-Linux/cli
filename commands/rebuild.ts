import { createCommand } from "commander"
import { getConfigDir } from "../helpers/config"
import { spawnAsync } from "@quados/helpers/cli"

export default createCommand("rebuild")
    .summary("rebuild system")
    .action(
        async () =>
            await spawnAsync(`pnpm tsx config.ts`, {
                stdio: "inherit",
                cwd: getConfigDir(),
            })
    )
