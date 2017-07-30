import "normalize.css/normalize.css";

import "prismjs/themes/prism.css";
import "prismjs";
import "prismjs/components/prism-jsx";

import React from "react";
import * as ReactDOM from "react-dom";

import Page from "./components/Page";

ReactDOM.render(<Page />, document.querySelector(".outlet"));
