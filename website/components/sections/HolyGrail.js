import React from "react";
import { stripIndent } from "common-tags";
import Cell from "../DemoCell";
import Grid from "../DemoGrid";
import Example from "../Example";
import Heading from "../Heading";
import MdnLink from "../MdnLink";

const HolyGrail = () =>
  <article style={{ display: "flex", height: "100%" }}>
    <Grid
      columns="100px 1fr 100px"
      rows="minmax(45px, auto) 1fr minmax(45px, auto)"
    >
      <Cell width={3}>
        <h1>Header</h1>
      </Cell>
      <Cell>Menu</Cell>
      <Cell>Content</Cell>
      <Cell>Ads</Cell>
      <Cell width={3}>Footer</Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid
    columns={"100px 1fr 100px"}
    rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
    <Cell width={3}>
      <h1>Header</h1>
    </Cell>

    <Cell>Menu</Cell>
    <Cell>Content</Cell>
    <Cell>Ads</Cell>

    <Cell width={3}>
      Footer
    </Cell>
  </Grid>
`;

const HolyGrailSection = () =>
  <section>
    <Heading name="holy-grail">Holy Grail Layout</Heading>
    <p>
      The{" "}
      <a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)">
        Holy Grail
      </a>{" "}
      layout is trivial using the <code>rows</code> prop. This prop is forwarded
      to the <MdnLink>grid-template-rows</MdnLink> CSS property. In this example
      we set the first and last rows to be at least 45px tall, but auto-grow if
      the content grows. The middle row is set to 1fr, which will grow to take
      up all available space.
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<HolyGrail />}
      path={"website/components/sections/HolyGrail.js"}
    />
  </section>;

export default HolyGrailSection;
