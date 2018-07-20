import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";


class Results extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Results">
        <Filters />
        <ResultsList />
      </div>
    );
  }
}

export default Results;
