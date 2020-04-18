import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import Projects from "./Pages/Projects";
import Error_404 from "./Pages/Error_404";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import * as Constants from "./Constants.js";
var history = createBrowserHistory({});
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/projects" component={Projects} />
      <Route
        exact
        path="/git"
        component={() => {
          window.location.href = Constants.GIT_URL;
          return null;
        }}
      />
      <Route exact path="/" component={App} />
      <Route component={Error_404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
