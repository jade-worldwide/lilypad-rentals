import "./Results.css";
import React, { Component } from "react";
import { ResultsList, Filters } from "../../components/ResultsList";
import { Field, Control, Select, Input, Button } from 'bloomer';
import { GoogleMap } from "../../components/GoogleMap";
import { Link, withRouter } from "react-router-dom";
import debounce from 'lodash/debounce';
import API from "../../utils/API";

const defaultForm = {
  city: '',
  state: '',
  minPrice: 0,
  maxPrice: 100000000,
  minSqFeet: 0,
  maxSqFeet: 100000000,
  minBeds: 0,
  maxBeds: 10,
  pets: "Any"
}

class Results extends Component {
  // Setting our component's initial state

  constructor(props) {
    super(props)

    const urlParams = new window.URLSearchParams(props.location.search)
    const form = {}

    Object.keys(defaultForm).forEach(key => {
      form[key] = urlParams.get(key) || defaultForm[key]
    })

    this.state = {
      properties: [],
      show: "columns results-columns",
      form,
    }
  }

  filtersShow = () => {
    this.setState({ show: "columns results-columns filters-margin" })
  }

  filtersHide = () => {
    this.setState({ show: "columns results-columns" })
  }


  // When the component mounts, load all properties and save them to this.state.properties
  componentDidMount() {
    this.fetchProperties();
  }

  fetchProperties = () => {
    API.getProperties(this.state.form)
      .then(res => {
        console.log("Res Data =>", res.data)
        this.setState({ properties: res.data})
      })

      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { form } = this.state;
    const { name, value } = event.target;

    form[name] = value

    console.log('handleinput', form);
    this.setState({ form });

    // Every time there's a change, make an API request, update the state, re-render.
    this.fetchProperties()
  };

  handleFilters = event => {
    // Every time there's a change, make an API request, update the state, re-render.
    this.fetchProperties()
  }

  render() {
    const { form } = this.state

    return (
      <div className="results">
        <div className={this.state.show}>
          <div className="column results-column list-column">
            <div className="filter-header">
              <Button isColor='primary' className="show-filters" onClick={this.filtersShow}><p>Filters</p></Button>
            </div>
            <div className="result-list">
              <Field>
                <Control>
                  <Input
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleFilters.bind(this)}
                    value={form.maxPrice}
                    name="maxPrice"
                    type="number"
                    placeholder='Maximum Price'
                    isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleFilters.bind(this)}
                    value={form.maxBeds}
                    name="maxBeds"
                    type="number"
                    placeholder='Maximum Bedroom'
                    isSize="medium" />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Input
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleFilters.bind(this)}
                    value={form.minBeds}
                    name="minBeds"
                    type="number"
                    placeholder='Minimum Bathroom'
                    isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Select
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleFilters.bind(this)}
                    value={form.pets}
                    name="pets"
                    type="text"
                    isSize="medium" >
                    <option>Any</option>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Cat or Dog</option>
                    <option>None</option>
                  </Select>
                </Control>
              </Field>

              {this.state.properties.map(property => (
                <Link key={property._id} to={"/property/" + property._id}>
                  <ResultsList
                    title={property.title}
                    price={property.price.toLocaleString()}
                    numOfBeds={property.numOfBeds}
                    photos={property.photos}
                    propertySize={property.propertySize.toLocaleString()}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="column results-column">
            <GoogleMap
              properties={this.state.properties} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Results);
