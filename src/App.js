import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import * as Constants from "./Constants.js";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Error_404 from "./Pages/Error_404";
import Header from "./components/Header";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
function App() {
  return (
    <div>
      <Header />
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
        <Route exact path="/" component={Home} />
        <Route component={Error_404} />
      </Switch>
    </div>
  );
}

export default App;
