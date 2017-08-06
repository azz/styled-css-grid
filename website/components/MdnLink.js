import React from "react";

const MdnLink = ({ children }) =>
  <a href={`https://mdn.io/${children}`}>
    <code>
      {children}
    </code>
  </a>;

export default MdnLink;
