import React from "react";
import styled from "styled-components";

import colors from "../colors";

const FooterContainer = styled.footer`
  background: ${colors[5]};
  color: black;
  margin-top: 3em;
  padding: 8px;
  text-align: center;

  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Footer = () =>
  <FooterContainer>
    <span>
      built by{" "}
      <a href="https://github.com/azz">
        <strong>@azz</strong>
      </a>{" "}
      with <code>react</code> + <code className="pre">
        styled-components
      </code>{" "}
      💅 &sdot;
      <iframe
        src="https://ghbtns.com/github-btn.html?user=azz&repo=styled-css-grid&type=star&count=true"
        style={{ marginLeft: "8px", verticalAlign: "sub" }}
        frameBorder="0"
        scrolling="0"
        width="170px"
        height="20px"
      />
    </span>
  </FooterContainer>;

export default Footer;
