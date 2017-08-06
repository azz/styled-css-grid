import styled from "styled-components";

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const columns = ({ columns = 12 }) =>
  typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;

const gap = ({ gap = "8px" }) => `${gap} ${gap}`;

const flow = ({ flow = "row" }) => flow;

const Grid = styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  grid-template-columns: ${columns};
  grid-gap: ${gap};
`;

export default Grid;
