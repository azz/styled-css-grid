import React from "react";
import styled from "styled-components";

const Cell = styled.section`
  justify-self: stretch;
  text-align: center;
  color: #222;
  height: 100%;
  font-size: calc(0.75rem + 3vmin);
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
`;

export default Cell;
