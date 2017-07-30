import React from "react";
import { stripIndent } from "common-tags";
import { flatMap, range } from "lodash-es";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";

const Rows = ({ counts }) =>
  flatMap(counts, number =>
    range(number).map(i =>
      <Cell center middle width={12 / number} key={`${number}_${i}`}>
        {i + 1}/{number}
      </Cell>
    )
  );

const TraditionalGrid = () =>
  <article>
    <Grid columns={12} minRowHeight="45px">
      <Rows counts={[12, 6, 4, 2, 1]} />
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns={12}>
    <Cell width={1}>1/12</Cell>
    <Cell width={1}>2/12</Cell>
    ...
    <Cell width={2}>1/6</Cell>
    <Cell width={2}>2/6</Cell>
    ...
  </Grid>
`;

const TraditionalGridSection = () =>
  <section>
    <Heading name="traditional">Traditional Grid</Heading>
    <p>
      We have all seen this before, but it is super easy to build with{" "}
      <code>styled-css-grid</code>.
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<TraditionalGrid />}
      path={"website/components/TraditionalGrid.js"}
    />
  </section>;

export default TraditionalGridSection;
