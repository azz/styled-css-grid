import styled from "styled-components";

const minmax = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

export default styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: ${({ flow = "row dense" }) => flow};
  grid-auto-rows: ${minmax};
  grid-template-rows: ${minmax};
  grid-template-columns: ${({ columns = 12 }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap = "8px" }) => `${gap} ${gap}`};
`;
