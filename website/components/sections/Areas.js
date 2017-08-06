import React from "react";
import { stripIndent } from "common-tags";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";
import Grid from "../DemoGrid";

const Areas = () =>
  <article style={{ display: "flex", height: "100%" }}>
    <Grid
      columns={"100px 1fr 100px"}
      rows={"45px 1fr 45px"}
      areas={[
        "header header  header",
        "menu   content ads   ",
        "footer footer  footer"
      ]}
    >
      <Cell area="header">Header</Cell>
      <Cell area="content">Content</Cell>
      <Cell area="menu">Menu</Cell>
      <Cell area="ads">Ads</Cell>
      <Cell area="footer">Footer</Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid
    columns={"100px 1fr 100px"}
    rows={"45px 1fr 45px"}
    areas={[
      "header header  header",
      "menu   content ads   ",
      "footer footer  footer"
    ]}>
    <Cell area="header">Header</Cell>
    <Cell area="content">Content</Cell>
    <Cell area="menu">Menu</Cell>
    <Cell area="ads">Ads</Cell>
    <Cell area="footer">Footer</Cell>
  </Grid>
`;

const AreasSection = () =>
  <section>
    <Heading name="areas">Areas</Heading>
    <p>
      This example takes the <a href="#holy-grail">holy grail</a> layout and
      applies &quot;areas&quot; to it. Using areas means you no longer need to
      use <code>width</code> and <code>height</code> on your cells. Instead you
      specify <code>areas</code> (which maps to{" "}
      <a href="https://mdn.io/grid-template-areas">
        <code>grid-template-areas</code>
      </a>) on your <code>Grid</code>, and use the names you supplied on the{" "}
      <code>Cell</code>s using the <code>area</code> prop, which again maps
      directly to the{" "}
      <a href="https://mdn.io/grid-areas">
        <code>grid-areas</code>
      </a>{" "}
      CSS property.
    </p>
    <p>
      Notice that this gives you the flexibility to arrange the HTML in a
      different order to how it is displayed on screen.
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<Areas />}
      path={"website/components/sections/Areas.js"}
    />
  </section>;

export default AreasSection;
