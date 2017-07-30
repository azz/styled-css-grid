import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  margin-top: 3rem;
  border-bottom: 1px solid #bbb;

  > a {
    padding: 4px;
    text-decoration: none;
    color: #8181af;
  }
  > a:hover {
    color: #75758c;
    text-decoration: underline;
  }
`;

const Heading = ({ name, children }) =>
  <H2>
    {children}
    <a name={name} href={"#" + name}>
      <small>#</small>
    </a>
  </H2>;

export default Heading;
