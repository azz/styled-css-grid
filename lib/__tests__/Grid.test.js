import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Grid from "../Grid";

describe("<Grid />", () => {
  test("matches snapshot with default args", () => {
    const tree = renderer.create(<Grid />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("'columns' prop sets 'grid-template-columns'", () => {
    const tree = renderer.create(<Grid columns={7} />).toJSON();
    expect(tree).toHaveStyleRule("grid-template-columns", "repeat(7,1fr)");
  });

  test("'gap' prop sets 'grid-gap'", () => {
    const tree = renderer.create(<Grid gap="7px" />).toJSON();
    expect(tree).toHaveStyleRule("grid-gap", "7px 7px");
  });

  test("'minRowHeight' prop sets 'grid-auto-rows' and 'grid-template-rows'", () => {
    const tree = renderer.create(<Grid minRowHeight="7px" />).toJSON();
    expect(tree).toHaveStyleRule("grid-auto-rows", "minmax(7px,auto)");
    expect(tree).toHaveStyleRule("grid-template-rows", "minmax(7px,auto)");
  });

  test("'flow' prop sets 'grid-auto-flow'", () => {
    const tree = renderer.create(<Grid flow="column" />).toJSON();
    expect(tree).toHaveStyleRule("grid-auto-flow", "column");
  });
});
