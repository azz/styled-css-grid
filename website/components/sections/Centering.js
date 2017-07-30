import React from "react";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Cell from "../DemoCell";

const Centering = () =>
  <article>
    <Grid columns={2} minRowHeight="45px">
      <Cell>Default</Cell>
      <Cell middle>Middle</Cell>
      <Cell center>Center</Cell>
      <Cell center middle>
        Center-Middle
      </Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns={3}>
    <Cell>Default</Cell>
    <Cell middle>Middle</Cell>
    <Cell center>Center</Cell>
    <Cell center middle>Center-Middle</Cell>
  </Grid>
`;

export default Centering;
export { code };
