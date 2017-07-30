import React from "react";
import { stripIndent } from "common-tags";
import { flatMap, range } from "lodash-es";
import { Grid } from "../../";
import Cell from "./DemoCell";

const Columns = ({ counts }) =>
  flatMap(counts, (count, i) =>
    range(count).map(number =>
      <Cell center middle height={12 / count} key={`${number}_${i}`}>
        {number + 1}/{count}
      </Cell>
    )
  );

const TransposedGrid = () =>
  <article>
    <Grid flow="column" columns={5}>
      <Columns counts={[12, 6, 4, 2, 1]} />
    </Grid>
  </article>;

const code = stripIndent`
  <Grid flow="column" columns={5}>
    <Cell height={1}>1/12</Cell>
    <Cell height={1}>2/12</Cell>
    ...
    <Cell height={2}>1/6</Cell>
    <Cell height={2}>2/6</Cell>
    ...
  </Grid>
`;

export default TransposedGrid;
export { code };
