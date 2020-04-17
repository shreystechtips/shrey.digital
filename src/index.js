import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createBrowserHistory } from "history";
import * as Constants from "./Constants.js"

var history = createBrowserHistory({});
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
    <Route
      path="/git"
      component={() => {
        window.location.href = Constants.GIT_URL;
        return null;
      }}
    />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
