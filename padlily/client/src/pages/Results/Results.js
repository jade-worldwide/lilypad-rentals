import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import "./Results.css";


class Results extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="results">
        <Filters />
        <ResultsList />
      </div>
    );
  }
}

export default Results;
