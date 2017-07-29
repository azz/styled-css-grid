import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const targets = [
  { dest: "dist/styled-css-grid.esm.js", format: "es" },
  { dest: "dist/styled-css-grid.umd.js", format: "umd" }
];

export default {
  entry: "index.js",
  moduleName: "StyledCssGrid",
  external: ["styled-components", "react"],
  targets,
  plugins: [commonjs(), babel()],
  globals: { "styled-components": "styled", react: "React" }
};
