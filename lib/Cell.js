import styled from "styled-components";

const Cell = styled.section`
  justify-self: stretch;
  color: #222;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
`;

export default Cell;
