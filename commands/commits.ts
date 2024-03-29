import chalk from "chalk"
import { createCommand } from "commander"
import { execAsync, flatpakExec, parseList, spin } from "@quados/helpers"

export default createCommand("commits")
    .summary("view commits for a package")
    .argument("<app>", "the application to look for")
    .action(async (app: string) => {
        const remotePackages = await spin(
            "Loading packages...",
            execAsync(
                "flatpak remote-ls --system --columns=name,application,commit,origin"
            )
        )

        const pkgs = parseList(remotePackages)

        const pkg = pkgs[app]
        if (!pkg)
            return console.error(chalk.red.bold("That package does not exist."))

        const history = await spin(
            "Getting package history...",
            flatpakExec(`remote-info --log ${pkg.origin} ${pkg.id}`)
        )
        console.info(history)
    })
