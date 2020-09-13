import React, { useEffect, useState } from "react";
import { Switch, Router, Route, Redirect } from "react-router";
import history from "./history";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./components/pages/welcomePage/Welcome";
import Footer from "./components/layout/Footer/Footer";
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
      <Footer />
    </div>
    // </Router>
  );
};

export default App;
