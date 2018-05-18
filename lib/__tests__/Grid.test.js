import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Grid from "../Grid";

describe("<Grid />", () => {
  test("matches snapshot with default args", () => {
    const tree = renderer.create(<Grid />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("'columns' as number prop sets 'grid-template-columns' to repeat()", () => {
    const tree = renderer.create(<Grid columns={7} />).toJSON();
    expect(tree).toHaveStyleRule("grid-template-columns", "repeat(7,1fr)");
  });

  test("'columns' as string prop sets 'grid-template-columns'", () => {
    const tree = renderer
      .create(<Grid columns="repeat(auto-fit, minmax(100px, 1fr))" />)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "grid-template-columns",
      "repeat(auto-fit,minmax(100px,1fr))"
    );
  });

  test("'rows' as number prop sets 'grid-template-rows' to repeat()", () => {
    const tree = renderer.create(<Grid rows={7} />).toJSON();
    expect(tree).toHaveStyleRule("grid-template-rows", "repeat(7,1fr)");
  });

  test("'rows' as string prop sets 'grid-template-rows'", () => {
    const tree = renderer.create(<Grid rows="1fr 2fr 1fr" />).toJSON();
    expect(tree).toHaveStyleRule("grid-template-rows", "1fr 2fr 1fr");
  });

  test("'gap' prop sets 'grid-gap'", () => {
    const tree = renderer.create(<Grid gap="7px" />).toJSON();
    expect(tree).toHaveStyleRule("grid-gap", "7px 7px");
  });

  test("'minRowHeight' prop sets 'grid-auto-rows'", () => {
    const tree = renderer.create(<Grid minRowHeight="7px" />).toJSON();
    expect(tree).toHaveStyleRule("grid-auto-rows", "minmax(7px,auto)");
  });

  test("'flow' prop sets 'grid-auto-flow'", () => {
    const tree = renderer.create(<Grid flow="column" />).toJSON();
    expect(tree).toHaveStyleRule("grid-auto-flow", "column");
  });

  test("'areas' array prop sets 'grid-template-areas'", () => {
    const tree = renderer.create(<Grid areas={["a a", "b b"]} />).toJSON();
    expect(tree).toHaveStyleRule("grid-template-areas", '"a a" "b b"');
  });

  test("'alignContent' prop sets 'align-content'", () => {
    const tree = renderer.create(<Grid alignContent="end" />).toJSON();
    expect(tree).toHaveStyleRule("align-content", "end");
  });

  test("'justifyContent' prop sets 'justify-content'", () => {
    const tree = renderer.create(<Grid justifyContent="end" />).toJSON();
    expect(tree).toHaveStyleRule("justify-content", "end");
  });
});
