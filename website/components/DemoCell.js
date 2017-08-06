import React from "react";
import { Cell } from "../../";

const _DemoCell = Cell.extend`
  font-size: 0.8em;
  border: 1px solid #999;
  background: #f5f2f0;
  line-height: 1;
  color: #905;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
`;

const DemoCell = props => <_DemoCell center middle {...props} />;

export default DemoCell;
