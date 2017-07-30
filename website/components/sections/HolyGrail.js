import React from "react";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Cell from "../DemoCell";

const Centering = () =>
  <article>
    <Grid columns={12} minRowHeight="45px">
      <Cell width={12} center middle>
        Header
      </Cell>
      <Cell width={3} height={3} center middle>
        Menu
      </Cell>
      <Cell width={6} height={3} center middle>
        Content
      </Cell>
      <Cell width={3} height={3} center middle>
        Ads
      </Cell>
      <Cell width={12} center middle>
        Footer
      </Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns={12}>
    <Cell width={12}>
      Header
    </Cell>
    <Cell width={3} height={3}>
      Menu
    </Cell>
    <Cell width={6} height={3}>
      Content
    </Cell>
    <Cell width={3} height={3}>
      Ads
    </Cell>
    <Cell width={12}>
      Footer
    </Cell>
  </Grid>
`;

export default Centering;
export { code };
