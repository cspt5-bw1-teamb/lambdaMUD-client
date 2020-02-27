import React from "react";
import "./App.css";
import Login from "./components/login/login";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to our game</h1>
      <Login />
    </div>
  );
}

export default App;
