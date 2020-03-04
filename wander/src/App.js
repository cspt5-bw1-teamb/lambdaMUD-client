import React from "react";
import "./App.css";
import Signup from "./components/login/Signup";
import Signin from "./components/login/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path = "/map" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
