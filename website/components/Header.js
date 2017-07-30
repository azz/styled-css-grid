import React from "react";
import styled from "styled-components";
import { Grid, Cell } from "../../";
import colors from "../colors";

const C = Cell.extend`
  font-size: 2em;
  color: #eeeeee;

  a {
    font-size: 1em;
    color: #fff;
  }

  :nth-of-type(1) {
    background: ${colors[0]};
    padding-left: 50%;
  }
  :nth-of-type(2) {
    background: ${colors[8]};
  }
  :nth-of-type(3) {
    background: ${colors[2]};
  }
  :nth-of-type(4) {
    background: ${colors[3]};
  }
  :nth-of-type(5) {
    background: ${colors[4]};
    padding-right: 50%;
  }
`;

const HeaderContainer = styled.header``;

const Header = () =>
  <HeaderContainer>
    <Grid columns={3} minRowHeight="45px">
      <C center middle width={2} height={1}>
        <code>styled</code>
      </C>
      <C center middle width={1} height={2}>
        <span>
          <a href="https://npmjs.org/styled-css-grid">npm</a> 📦
        </span>
      </C>
      <C center middle width={1} height={2}>
        <span>
          <a href="https://github.com/azz/styled-css-grid">GitHub</a> 📘
        </span>
      </C>
      <C center middle width={1} height={1}>
        <code>css</code>
      </C>
      <C center middle width={2} height={1}>
        <code>grid</code>
      </C>
    </Grid>
  </HeaderContainer>;

export default Header;
