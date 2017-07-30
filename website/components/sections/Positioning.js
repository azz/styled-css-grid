import React from "react";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";

const Positioning = () =>
  <article>
    <Grid columns={3} minRowHeight="65px">
      <Cell center middle>
        Top Left
      </Cell>
      <Cell left={3} center middle>
        Top Right
      </Cell>
      <Cell left={2} top={2} center middle>
        Middle
      </Cell>
      <Cell top={3} center middle>
        Bottom Left
      </Cell>
      <Cell top={3} left={3} center middle>
        Bottom Right
      </Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns={3}>
    <Cell>Top Left</Cell>
    <Cell left={3}>Top Right</Cell>
    <Cell left={2} top={2}>Middle</Cell>
    <Cell top={3}>Bottom Left</Cell>
    <Cell top={3} left={3}>Bottom Right</Cell>
  </Grid>
`;

const PositioningSection = () =>
  <section>
    <Heading name="positioning">Positioning</Heading>
    <p>
      You can use the <code>left</code> and <code>top</code> props to set the{" "}
      <a href="https://mdn.io/grid-column-start">
        <code>grid-column-start</code>
      </a>{" "}
      and{" "}
      <a href="https://mdn.io/grid-column-start">
        <code>grid-row-start</code>
      </a>{" "}
      CSS properties, respectively. This allows you to offset content or have
      finer grain control over the position of cells.
    </p>
    <p>Keep in mind that the top-left coordinate is (1, 1), not (0, 0).</p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<Positioning />}
      path={"website/components/Positioning.js"}
    />
  </section>;

export default PositioningSection;
