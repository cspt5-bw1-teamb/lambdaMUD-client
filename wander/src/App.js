import React from "react";
import "./App.css";
import Signup from "./components/login/Signup";
import Signin from "./components/login/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>hello world</h1>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
