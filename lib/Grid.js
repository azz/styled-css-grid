import styled from "styled-components";

const minmax = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const columnRepeat = ({ columns = 12 }) => `repeat(${columns}, 1fr)`;

const gap = ({ gap = "8px" }) => `${gap} ${gap}`;

const flow = ({ flow = "row" }) => flow;

export default styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: ${flow};
  grid-auto-rows: ${minmax};
  grid-template-rows: ${minmax};
  grid-template-columns: ${columnRepeat};
  grid-gap: ${gap};
`;
