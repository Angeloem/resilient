import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import AboutPage from "views/AboutPage/AboutPage";
import LoginPage from "./views/LoginPage/LoginPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/ResilientVoices" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/gallery" component={LoginPage} />
      <Route path="/members" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
