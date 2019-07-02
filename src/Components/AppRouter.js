import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import PropType from "prop-types";
const LogedInRouter = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);
const LogedOutRouter = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LogedInRouter /> : <LogedOutRouter />}</Switch>
  </Router>
);

AppRouter.prototype = {
  isLoggedIn: PropType.bool.isRequired
};

export default AppRouter;
