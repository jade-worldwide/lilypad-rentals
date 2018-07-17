import React, { Component } from "react";
import ResultsList from "../../components/ResultsList";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Results extends Component {
  // Setting our component's initial state
  state = {
    properties: [],
    title: "",
    price: 0,
    numOfBeds: 0,
    propertySize: ""
  };

  // When the component mounts, load all properties and save them to this.state.properties
  componentDidMount() {
    this.loadProperties();
  }

  // Loads all properties  and sets them to this.state.properties
  loadProperties = () => {
    API.getProperties()
      .then(res =>
        this.setState({ properties: res.data, title: ""})
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div className="Results">
      
        {this.state.properties.map(property => (
        <Link to={"/property/" + property._id}>
        <ResultsList 
            title={property.title}
            price={property.price}
            numOfBeds={property.numOfBeds}
            propertySize={property.propertySize}
        />
        </Link>
      ))}

      </div>
    );
  }
}

export default Results;
