import * as sassPlugin from "esbuild-plugin-sass";
import { BuildOptions, build } from "esbuild";

const buildOpts: BuildOptions = {
    entryPoints: [ "src/theme.scss" ],
    outfile: "dist/bundle.theme.css",
    bundle: true,
    minify: true,
    plugins: [ sassPlugin.default() ],
};

build(buildOpts).catch(() => process.exit(1));