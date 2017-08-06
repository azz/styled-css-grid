import React from "react";
import { stripIndent } from "common-tags";
import Cell from "../DemoCell";
import Grid from "../DemoGrid";
import Example from "../Example";
import Heading from "../Heading";

const Responsive = () =>
  <article>
    <Grid columns="repeat(auto-fit, minmax(120px, 1fr))" minRowHeight="45px">
      <Cell>A</Cell>
      <Cell>B</Cell>
      <Cell>C</Cell>
      <Cell>D</Cell>
      <Cell>E</Cell>
      <Cell>F</Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
    <Cell>A</Cell>
    <Cell>B</Cell>
    ...
  </Grid>
`;

const ResponsiveSection = () =>
  <section>
    <Heading name="responsive">Responsive Layout</Heading>
    <p>
      The{" "}
      <a href="https://mdn.io/grid-template-columns">
        <code>grid-template-columns</code>
      </a>{" "}
      CSS property is incredibly powerful for building responsive content. When
      the <code>columns</code> prop is a number, it is a shorthand for{" "}
      <code>grid-template-columns: repeat(N, 1fr)</code>. However, when you pass
      a string, the value is passed directly to the CSS property, allowing you
      leverage the full power of this property.
    </p>
    <p>
      If you&#39;re just after basic responsive content that will automatically
      fit to your content, you can use{" "}
      <code>repeat(auto-fit, minmax(120px, 1fr))</code> as your{" "}
      <code>columns</code> prop, which will create columns to auto-fit your
      content with a minimum width of 120px.
    </p>
    <p>Resize your browser for an example.</p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<Responsive />}
      path={"website/components/sections/Responsive.js"}
    />
  </section>;

export default ResponsiveSection;
