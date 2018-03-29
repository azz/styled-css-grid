import styled from "styled-components";
import PropTypes from "prop-types";

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const columns = ({ columns = 12 }) =>
  typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;

const gap = ({ gap = "8px" }) => {
  if (gap.match(/\s/)) {
    if (gap.split(" ").length - 1 > 1) {
      throw Error("Gap can get two values 'row, column'");
    }
    return `${gap}`;
  }
  return `${gap} ${gap}`;
};

const flow = ({ flow = "row" }) => flow;

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const Grid = styled.div`
  display: grid;
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  grid-template-columns: ${columns};
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
  rows: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
};

export default Grid;
