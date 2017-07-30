import React from "react";
import TraditionalGrid, { code as traditionalCode } from "./TraditionalGrid";
import TransposedGrid, { code as transposedCode } from "./TransposedGrid";
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
  </main>;

export default Main;
