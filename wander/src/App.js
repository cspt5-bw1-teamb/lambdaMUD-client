import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Map currentRoomId = {3}/>
    </div>
  );
}

export default App;
