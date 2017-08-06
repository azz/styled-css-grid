import React from "react";
import { stripIndent } from "common-tags";
import Cell from "../DemoCell";
import Grid from "../DemoGrid";
import { Grid as _Grid, Cell as _Cell } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import MdnLink from "../MdnLink";

const alignments = [
  "start",
  "end",
  "center",
  "stretch",
  "space-around",
  "space-between",
  "space-evenly"
];

const HorizontalAlignment = () =>
  <_Grid columns="repeat(auto-fit, minmax(200px, 1fr))">
    {alignments.map(alignment =>
      <_Cell
        style={{ display: "flex", flexDirection: "column" }}
        key={alignment}
      >
        <code>
          {alignment}
        </code>
        <Grid columns="50px 50px 50px" justifyContent={alignment}>
          <Cell>A</Cell>
          <Cell>B</Cell>
          <Cell>C</Cell>
        </Grid>
      </_Cell>
    )}
  </_Grid>;

const horizontalCode = stripIndent`
  <Grid
    columns={"50px 50px 50px"}
    justifyContent="space-around">
    <Cell>A</Cell>
    <Cell>B</Cell>
    <Cell>C</Cell>
  </Grid>
`;

const VerticalAlignment = () =>
  <_Grid columns="repeat(auto-fit, minmax(130px, 1fr))" minRowHeight="150px">
    {alignments.map(alignment =>
      <_Cell
        key={alignment}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <code>
          {alignment}
        </code>
        <Grid columns={1} alignContent={alignment}>
          <Cell>A</Cell>
          <Cell>B</Cell>
          <Cell>C</Cell>
        </Grid>
      </_Cell>
    )}
  </_Grid>;

const verticalCode = stripIndent`
  <Grid
    columns={1}
    alignContent="space-around">
    <Cell>A</Cell>
    <Cell>B</Cell>
    <Cell>C</Cell>
  </Grid>
`;

const AlignmentSection = () =>
  <section>
    <Heading name="alignment">Alignment</Heading>
    <p>
      Horizontal alignment of columns can be modified using the{" "}
      <code>justifyContent</code> (<MdnLink>justify-content</MdnLink> CSS
      property).
    </p>
    <Example
      input={
        <pre>
          <code>
            {horizontalCode}
          </code>
        </pre>
      }
      output={<HorizontalAlignment />}
    />
    <p>
      Vertical alignment of rows can be modified using the{" "}
      <code>alignContent</code> (<MdnLink>align-content</MdnLink> CSS property).
    </p>
    <Example
      input={
        <pre>
          <code>
            {verticalCode}
          </code>
        </pre>
      }
      output={<VerticalAlignment />}
      path={"website/components/sections/Alignment.js"}
    />
  </section>;

export default AlignmentSection;
