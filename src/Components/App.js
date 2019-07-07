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
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  width: 100%;
  height: 100vh;
`;
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Router>
          {isLoggedIn ? <Header /> : null}
          <AppRouter isLoggedIn={isLoggedIn} />
        </Router>
        <Footer />
        <ToastContainer position={"bottom-left"} />
      </Wrapper>
    </ThemeProvider>
  );
};
