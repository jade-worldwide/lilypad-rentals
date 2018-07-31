import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import { Button } from 'bloomer';
import { ResultsMap } from "../../components/ResultsMap";
import { GoogleMap } from "../../components/GoogleMap";
import "./Results.css";


class Results extends Component {


// Setting our component's initial state
state = {
  show: "columns results-columns",
};

  filtersShow = () => {
    this.setState({ show: "columns results-columns filters-margin" })
  }

  filtersHide = () => {
    this.setState({ show: "columns results-columns" })
  }


  render() {
    return (
      <div className="results">
        <Filters handler = {this.handler} />
        <div className={this.state.show}>
          <div className="column results-column list-column">
            <div className="filter-header">
              <Button isColor='primary' className="show-filters" onClick={this.filtersShow}><p>Filters</p></Button>
            </div>
            <div className="result-list">
              <ResultsList />
            </div>
          </div>
          <div className="column results-column">
            <GoogleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
