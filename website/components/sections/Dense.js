import React from "react";
import styled from "styled-components";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Dense = () =>
  <article>
    <Grid flow="row dense" columns={4} minRowHeight="100px">
      <Cell width={2} height={1} center>
        A
        <Image src="http://lorempixel.com/200/100/animals/2/" />
      </Cell>
      <Cell width={1} height={2} center>
        B
        <Image src="http://lorempixel.com/100/200/animals/1/" />
      </Cell>
      <Cell width={2} height={1} center>
        C
        <Image src="http://lorempixel.com/200/100/animals/4/" />
      </Cell>
      <Cell center>
        D
        <Image src="http://lorempixel.com/100/100/animals/3/" />
      </Cell>
      <Cell center>
        E
        <Image src="http://lorempixel.com/100/100/animals/5/" />
      </Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid flow="row dense" columns={4}>
    <Cell width={2} height={1}>
      A 200x100
    </Cell>
    <Cell width={1} height={2}>
      B 100x200
    </Cell>
    <Cell width={2} height={1}>
      C 200x100
    </Cell>
    <Cell>
      D 100x100
    </Cell>
    <Cell>
      E 100x100
    </Cell>
  </Grid>
`;

const DenseSection = () =>
  <section>
    <Heading name="dense">Dense Layout</Heading>
    <p>
      By default, <code>styled-css-grid</code> set the flow property to{" "}
      <code>row</code>. However, by setting it to <code>row dense</code> you can
      turn on CSS grid&quot;s dense cell packing. Notice how the order of the
      cells in the markup is not same when it is rendered!
    </p>
    <Example
      input={
        <pre>
          <code>
            {code}
          </code>
        </pre>
      }
      output={<Dense />}
      path={"website/components/Dense.js"}
    />
  </section>;

export default DenseSection;
