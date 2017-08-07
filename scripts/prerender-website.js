"use strict";

const fs = require("fs");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");

require("babel-polyfill");
require("babel-register")({
  ignore: path => /node_modules/.test(path) && !/\/lodash-es\//.test(path),
  presets: [["es2015", { modules: false }], "react"],
  plugins: [
    ["transform-es2015-modules-commonjs", { loose: true }],
    ["styled-components", { minify: true }]
  ]
});

const Page = require("../website/components/Page").default;

const sheet = new ServerStyleSheet();
const html = renderToString(sheet.collectStyles(React.createElement(Page)));
const styles = sheet.getStyleTags();

const document = fs
  .readFileSync("./website/index.html", "utf-8")
  .replace("{{html}}", html)
  .replace("{{css}}", styles);

fs.writeFileSync("./website/bin/index.html", document, "utf-8");
