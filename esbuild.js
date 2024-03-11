import { build } from "esbuild"
import { importPatternPlugin } from "esbuild-plugin-import-pattern"

await build({
    entryPoints: ["cli.ts"],
    bundle: true,
    platform: "node",
    outfile: "dist/out.js",
    banner: { js: "#!/usr/bin/env node" },
    plugins: [importPatternPlugin()],
    treeShaking: true,
    minify: true,
})
