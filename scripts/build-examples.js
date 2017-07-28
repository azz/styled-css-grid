"use strict";

const sh = require("shelljs");

sh.cp("./node_modules/babel-standalone/babel.min.js", "./examples/babel.js");
sh.cp(
  "./node_modules/react/umd/react.production.min.js",
  "./examples/react.js"
);
sh.cp(
  "./node_modules/react-dom/umd/react-dom.production.min.js",
  "./examples/react-dom.js"
);
sh.cp("./dist/index.js", "./examples/lucas.js");
