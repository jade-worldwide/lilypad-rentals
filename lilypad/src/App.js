import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Renter from "./pages/Renter";
import Manager from "./pages/Manager";
import Property from "./pages/Property";
import Map from "./pages/Map";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
