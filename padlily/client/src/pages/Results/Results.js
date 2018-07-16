import React, { Component } from "react";
import ResultsList from "../../components/ResultsList";
import API from "../../utils/API";


class Results extends Component {
  // Setting our component's initial state
  state = {
    properties: [],
    title: "",
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadProperties();
  }

  // Loads all books  and sets them to this.state.books
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
        <ResultsList />
        <h1>
          Hello
          {this.state.properties.title}
        </h1>
        {this.state.properties.map(property => (

                      <strong>
                        {property.title}
                      </strong>
                ))}
      </div>
    );
  }
}

export default Results;
