import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import "./Results.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Results extends Component {
  // Setting our component's initial state
  state = {
    properties: [],
    title: "",
    price: 0,
    numOfBeds: 0,
    propertySize: "",
    photos: ""
  };

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
        this.setState({ properties: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div className="results">
        <Filters />
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
    );
  }
}

export default Results;