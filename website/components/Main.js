import React from "react";
import Centering, { code as centeringCode } from "./sections/Centering";
import HolyGrail, { code as holyGrailCode } from "./sections/HolyGrail";
import TraditionalGrid, {
  code as traditionalCode
} from "./sections/TraditionalGrid";
import TransposedGrid, {
  code as transposedCode
} from "./sections/TransposedGrid";
import Example from "./Example";
import Heading from "./Heading";

const Main = () =>
  <main className="language-jsx">
    <Heading name="traditional">Traditional Grid</Heading>
    <p>
      We have all seen this before, but it is super easy to build with{" "}
      <code>styled-css-grid</code>.
    </p>
    <Example
      input={
        <pre>
          <code>
            {traditionalCode}
          </code>
        </pre>
      }
      output={<TraditionalGrid />}
      path={"website/components/TraditionalGrid.js"}
    />

    <Heading name="transposed">Transposed Grid</Heading>
    <p>
      However, transposing this is difficult without <code>display: grid</code>,
      even with flexbox. With <code>styled-css-grid</code> this is made simple!
      Just use <code>height</code> instead of <code>width</code> and add{" "}
      <code>flow=&quot;column&quot;</code> to the <code>Grid</code> component.
      This maps directly to the{" "}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">
        <code>grid-auto-flow</code>
      </a>{" "}
      CSS property.
    </p>
    <Example
      input={
        <pre>
          <code>
            {transposedCode}
          </code>
        </pre>
      }
      output={<TransposedGrid />}
      path={"website/components/TransposedGrid.js"}
    />

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
            {holyGrailCode}
          </code>
        </pre>
      }
      output={<HolyGrail />}
      path={"website/components/HolyGrail.js"}
    />

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
            {centeringCode}
          </code>
        </pre>
      }
      output={<Centering />}
      path={"website/components/Centering.js"}
    />
  </main>;

export default Main;
