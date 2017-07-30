import React from "react";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
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

const CenteringSection = () =>
  <section>
    <Heading name="centering">Centering Content</Heading>
    <p>
      Centering content (especially verticically) has traditionally been quite
      difficult in CSS. <code>styled-css-grid</code> offers two helper props,{" "}
      <code>middle</code> and <code>center</code> to simpify the process.
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<Centering />}
      path={"website/components/Centering.js"}
    />
  </section>;

export default CenteringSection;
