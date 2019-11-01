import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./Routes";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";
import Header from "./Header";
import { HashRouter as Router } from "react-router-dom";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Wrapper>
          <Router>
            <GlobalStyles />
            {isLoggedIn ? <Header /> : null}
            <AppRouter isLoggedIn={isLoggedIn} />
          </Router>
          <ToastContainer position={"bottom-left"} />
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
