import { writeFile } from "fs/promises"
import { parseList, execAsync, spin } from "@quados/helpers"
import { createCommand } from "commander"
import { getPackages } from "../helpers/config"

export default createCommand("update")
    .summary("update package lock")
    .action(async () => {
        const remotePackages = await spin(
            "Loading packages...",
            execAsync(
                "flatpak remote-ls --system --columns=name,application,commit,origin"
            )
        )

        const packages = parseList(remotePackages)

        await spin(
            "Writing packages...",
            writeFile(
                getPackages(),
                `import { Package } from "@quados/models"
export default {${Object.keys(packages).map(
                    (key) =>
                        `${JSON.stringify(
                            key
                        )}: Package.create(${JSON.stringify(packages[key])})`
                )}}`
            )
        )
    })
