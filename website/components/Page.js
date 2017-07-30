import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const PageContainer = styled.div`
  max-width: 960px;
  padding: 8px;
  margin: 0 auto;
  font-weight: 300;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const Page = () =>
  <PageContainer>
    <Header />
    <Main />
    <Footer />
  </PageContainer>;

export default Page;
