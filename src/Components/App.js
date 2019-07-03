import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import Client from "../Apollo/Client";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={!true} />
    </>
  </ThemeProvider>
);
