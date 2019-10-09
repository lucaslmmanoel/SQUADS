import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Squads from "./pages/Squads";
import Metrics from "./pages/metrics";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LoginPage} />
      <Route path="/app" component={App} />
      <Route path="/squads" component={Squads} />
      <Route path="/metrics" component={Metrics} />
      <Route path="/profile" component={ProfilePage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
