import * as sassPlugin from "esbuild-plugin-sass";
import { build } from "esbuild";
const buildOpts = {
    entryPoints: ["src/theme.scss"],
    outfile: "dist/bundle.theme.css",
    bundle: true,
    minify: true,
    plugins: [sassPlugin.default()],
};
build(buildOpts).catch(() => process.exit(1));
