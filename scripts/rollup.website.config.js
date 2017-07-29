import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

/* eslint-env node */

const env = process.env.NODE_ENV || "development";
const prod = env === "production";

export default {
  entry: "website/website.js",
  dest: "website/bin/website.js",
  format: "iife",
  sourceMap: !prod,
  plugins: [
    resolve(),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["node_modules/process-es6/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    babel({ exclude: "node_modules/**" }),
    prod && uglify()
  ]
};
