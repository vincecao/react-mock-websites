import React, { useEffect, useState } from "react";
import { Switch, Router, Route, Redirect } from "react-router";
import history from "./history";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./components/pages/welcomePage/Welcome";
const App = () => {
  return (
    // <Router history={history}> // customise history
    <div className="w-full">
      <BrowserRouter>
        <Switch>
          <Route path="/">{({ match }) => <Welcome />}</Route>
          <Redirect from="/#" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
    // </Router>
  );
};

export default App;
