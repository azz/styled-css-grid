import React from "react";
import { stripIndent } from "common-tags";
import { flatMap, range } from "lodash-es";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";

const Columns = ({ counts }) =>
  flatMap(counts, (count, i) =>
    range(count).map(number =>
      <Cell height={12 / count} key={`${number}_${i}`}>
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

const TransposedGridSection = () =>
  <section>
    <Heading name="transposed">Transposed Grid</Heading>
    <p>
      However, transposing this is difficult without <code>display: grid</code>,
      even with flexbox. With <code>styled-css-grid</code> this is made simple!
      Just use <code>height</code> instead of <code>width</code> and add{" "}
      <code>flow=&quot;column&quot;</code> to the <code>Grid</code> component.
      This maps directly to the{" "}
      <a href="https://mdn.io/grid-auto-flow">
        <code>grid-auto-flow</code>
      </a>{" "}
      CSS property.
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<TransposedGrid />}
      path={"website/components/sections/TransposedGrid.js"}
    />
  </section>;

export default TransposedGridSection;
