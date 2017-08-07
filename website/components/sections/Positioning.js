import React from "react";
import { stripIndent } from "common-tags";
import Cell from "../DemoCell";
import Grid from "../DemoGrid";
import Example from "../Example";
import Heading from "../Heading";
import MdnLink from "../MdnLink";

const Positioning = () =>
  <article>
    <Grid columns={3} minRowHeight="65px">
      <Cell>Top Left</Cell>
      <Cell left={3}>Top Right</Cell>
      <Cell left={2} top={2}>
        Middle
      </Cell>
      <Cell top={3}>Bottom Left</Cell>
      <Cell top={3} left={3}>
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
      <MdnLink>grid-column-start</MdnLink> and <MdnLink>grid-row-start</MdnLink>{" "}
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
      path={"website/components/sections/Positioning.js"}
    />
  </section>;

export default PositioningSection;
