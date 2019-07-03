import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import Client from "../Apollo/Client";

export default () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={Client}>
      <GlobalStyles />
      <AppRouter isLoggedIn={!true} />
    </ApolloProvider>
  </ThemeProvider>
);
