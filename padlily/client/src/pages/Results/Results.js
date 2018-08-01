import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import { Button } from 'bloomer';
import { GoogleMap } from "../../components/GoogleMap";

import { Link } from "react-router-dom";
import "./Results.css";
import API from "../../utils/API";



class Results extends Component {
  // Setting our component's initial state
  state = {
    properties: [],
    show: "columns results-columns",
    title: "",
    price: 0,
    numOfBeds: 0,
    propertySize: "",
    photos: ""
  };

  filtersShow = () => {
    this.setState({ show: "columns results-columns filters-margin" })
  }

  filtersHide = () => {
    this.setState({ show: "columns results-columns" })
  }


  // When the component mounts, load all properties and save them to this.state.properties
  componentDidMount() {
    this.loadProperties();
  }

  // Loads all properties  and sets them to this.state.properties
  loadProperties = () => {
    let queryString = (window.location.search)
    console.log(queryString)
    API.getProperties(queryString)
      .then(res =>
        this.setState({ properties: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.properties)
    return (
      <div className="results">
        <Filters handler={this.handler} />
        <div className={this.state.show}>
          <div className="column results-column list-column">
            <div className="filter-header">
              <Button isColor='primary' className="show-filters" onClick={this.filtersShow}><p>Filters</p></Button>
            </div>
            <div className="result-list">
              {this.state.properties.map(property => (
                <Link to={"/property/" + property._id}>
                  <ResultsList
                    title={property.title}
                    price={property.price}
                    numOfBeds={property.numOfBeds}
                    photos={property.photos}
                    propertySize={property.propertySize}
                  />
                </Link>
              ))}
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
