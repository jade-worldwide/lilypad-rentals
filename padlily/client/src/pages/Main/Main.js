import React, { Component } from "react";
import Nav from "../../components/Nav";
import { MainHero, MainSearch, LocationSearchInput } from "../../components/MainHero";

class Main extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Main">
        <Nav />
        <MainHero>
          <LocationSearchInput />
        </MainHero>
      </div>
    );
  }
}

export default Main;
