import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 935px;
  width: 100%;
`;
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
