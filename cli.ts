import { program } from "commander"
// @ts-expect-error
import { entries as commands } from "./commands/*"

program.name("quad")
for (const [, { default: command }] of commands) program.addCommand(command)

program.parse()
