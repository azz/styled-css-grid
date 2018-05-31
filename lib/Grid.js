import styled from "styled-components";
import PropTypes from "prop-types";

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const frGetter = value =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = "8px" }) => gap;

const flow = ({ flow = "row" }) => flow;

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const Grid = styled.div`
  display: grid;
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${gap};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
};

export default Grid;
