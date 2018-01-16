import styled from "styled-components";
import PropTypes from "prop-types";

const columns = ({ columns = 12 }) =>
  typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");


const Grid = styled.div`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${({ flow = 'row' }) => flow};
  grid-auto-rows: ${({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  grid-template-columns: ${columns};
  grid-gap: ${({ gap = '8px' }) => `${gap} ${gap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  height: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
};

export default Grid;
