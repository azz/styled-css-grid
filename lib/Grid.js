import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const _Grid = styled.div`
  min-height: 100%;
  flex-grow: 1;
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(20vh, auto);
  grid-template-rows: minmax(20vh, auto);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 8px;
`;

export default function Grid({ children }) {
  return (
    <GridContainer>
      <_Grid>
        {children}
      </_Grid>
    </GridContainer>
  );
}
