import styled from "styled-components";

const minmax = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const Grid = styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: ${minmax};
  grid-template-rows: ${minmax};
  grid-template-columns: ${({ columns = 3 }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap = "8px" }) => `${gap} ${gap}`};
`;

export default Grid;
