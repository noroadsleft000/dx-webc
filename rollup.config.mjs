import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };
const isProd = process.env.NODE_ENV === "production";
console.log(`mode: ${process.env.NODE_ENV}`);

export default {
    input: [
        "src/index.ts"
    ],
    output: [
        {
            file: packageJson.main,
            format: "esm",
            sourcemap: !isProd
        }
    ],
    plugins: [
        resolve({extensions: ['', '.js', '.ts']}),
        commonjs(),
        postcss({ extract: "index.bundle.css", minimize: isProd }),
        typescript({ clean: true }),
        isProd && terser({
            ecma: 2020,
            module: true,
            output: { comments: false }
        })
    ],
    preserveEntrySignatures: "strict"
};