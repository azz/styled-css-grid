import React from "react";
import { stripIndent } from "common-tags";
import { Grid } from "../../../";
import Example from "../Example";
import Heading from "../Heading";
import Cell from "../DemoCell";

const HolyGrail = () =>
  <article>
    <Grid columns={12} minRowHeight="45px">
      <Cell width={12} center middle>
        Header
      </Cell>
      <Cell width={3} height={3} center middle>
        Menu
      </Cell>
      <Cell width={6} height={3} center middle>
        Content
      </Cell>
      <Cell width={3} height={3} center middle>
        Ads
      </Cell>
      <Cell width={12} center middle>
        Footer
      </Cell>
    </Grid>
  </article>;

const code = stripIndent`
  <Grid columns={12}>
    <Cell width={12}>
      Header
    </Cell>
    <Cell width={3} height={3}>
      Menu
    </Cell>
    <Cell width={6} height={3}>
      Content
    </Cell>
    <Cell width={3} height={3}>
      Ads
    </Cell>
    <Cell width={12}>
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
      layout is trivial!
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
