import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import { MainHero, MainSearch, LocationSearchInput } from "./components/MainHero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainHero>
          <LocationSearchInput />
        </MainHero>
      </div>
    );
  }
}

export default App;
