import React, { Component } from "react";
import Nav from "../../components/Nav";
import ResultsList from "../../components/ResultsList";


class Results extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Results">
        <Nav />
        <ResultsList />
      </div>
    );
  }
}

export default Results;
