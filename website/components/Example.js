import React from "react";
import styled from "styled-components";

const browse = "https://github.com/azz/styled-css-grid/blob/master/";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row wrap;

  @media (max-width: 550px) {
    display: block;
  }
`;

const Example = ({ input, output, path }) =>
  <FlexContainer>
    <div style={{ paddingRight: "8px" }}>
      {input}
      {path && <a href={browse + path}>View Source</a>}
    </div>
    <div style={{ margin: ".5em 0", width: "100%" }}>
      {output}
    </div>
  </FlexContainer>;

export default Example;
