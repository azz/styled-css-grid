import styled from "styled-components";

export default styled.section`
  height: 100%;
  min-width: 0;
  overflow: hidden;
  align-content: space-around;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};

  ${({ center = false }) => center && `text-align: center;`};

  ${/* prettier-ignore */
  ({ middle = false }) => middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `};
`;
