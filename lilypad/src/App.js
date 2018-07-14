import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Renter from "./pages/Renter";
import Manager from "./pages/Manager";
import Property from "./pages/Property";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Manager />
      </div>
    );
  }
}

export default App;
