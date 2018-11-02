import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { history } from "./history";
import Landing from "./pages/Landing";

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route exact path="/:country" component={Landing} />
        <Redirect to="/spain" />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
