import styled from "styled-components";

const Grid = styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(20vh, auto);
  grid-template-rows: minmax(20vh, auto);
  grid-template-columns: ${({ columns = 3 }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap = 8 }) => `${gap}px ${gap}px`};
`;

export default Grid;
