import React from "react";
import "./App.css";
import Signup from "./components/login/Signup";
import Signin from "./components/login/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <h1>hello world</h1>
      <div className="App">
        <Map currentRoomId={3} />
      </div>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
