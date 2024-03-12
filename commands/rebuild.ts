import { createCommand } from "commander"
import { getConfigDir } from "../helpers/config"
import { spawnAsync } from "@quados/helpers"

export default createCommand("rebuild")
    .summary("rebuild system")
    .action(
        async () =>
            await spawnAsync(`ts-run config.ts`, {
                cwd: getConfigDir(),
                stdio: "inherit",
            })
    )
