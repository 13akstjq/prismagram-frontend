import { Route, Switch } from "react-router-dom";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import PropType from "prop-types";
import Explore from "../Routes/Explorer";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Notifications from "../Routes/Notifications";
import Private from "../Routes/Private";

const LogedInRouter = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Route path="/private" exact component={Private} />
  </Switch>
);

const LogedOutRouter = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LogedInRouter /> : <LogedOutRouter />;

AppRouter.prototype = {
  isLoggedIn: PropType.bool.isRequired
};

export default AppRouter;
