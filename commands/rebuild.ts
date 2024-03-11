import { createCommand } from "commander"
import { getConfigDir } from "../helpers/config"
import { spawnAsync } from "@quados/helpers/cli"

export default createCommand("rebuild")
    .summary("rebuild system")
    .action(
        async () =>
            await spawnAsync(
                `pnpm esbuild --bundle config.ts --minify --tree-shaking --platform=node | node`,
                {
                    stdio: "inherit",
                    cwd: getConfigDir(),
                }
            )
    )
