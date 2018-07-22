import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import API from "../../utils/API";
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";

class NewPropertyForm extends Component {
  // Setting our component's initial state
  state = {
    property: [],
    title: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
    propertySize: "",
    propertyType: "",
    numOfBeds: "",
    numOfBaths: "",
    price: "",
    pets: "",
    parking: "",
    laundry: "",
    heating: "",
    cooling: "",
    description: "",
    photos: []

  };

  componentDidMount() {
    this.loadProperties();
  }
  loadProperties = () => {
  API.getProperty()
  .then(res => 
    this.setState({ property: res.data, 
    title: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: 0,
    propertySize: 0,
    propertyType: "",
    numOfBeds: 0,
    numOfBaths: 0,
    price: 0,
    pets: "",
    parking: "",
    laundry: "",
    heating: "",
    cooling: "",
    description: "",
    photos: []
  }))
  .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Input Changed");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title  && this.state.address && this.state.address &&
      this.state.city && this.state.state && this.state.phoneNumber &&
      this.state.propertyType && this.state.numOfBeds && 
      this.state.propertySize && this.state.numOfBaths &&
      this.state.price && this.state.pets && this.state.parking && this.state.laundry &&
      this.state.heating && this.state.cooling && this.state.description) {
      API.saveProperty({
        title: this.state.title,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        phoneNumber: this.state.phoneNumber,
        propertySize: this.state.propertySize,
        propertyType: this.state.propertyType,
        numOfBeds: this.state.numOfBeds,
        numOfBaths: this.state.numOfBaths,
        price: this.state.price,
        pets: this.state.pets,
        parking: this.state.parking,
        laundry: this.state.laundry,
        heating: this.state.heating,
        cooling: this.state.cooling,
        description: this.state.description,
        photos: this.state.photos
      })
        .then(res => this.loadProperties(),
        console.log("submitted"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <Container>
          <Field>
            <Control>
              <Input 
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title" 
              type="Text" 
              placeholder='Title' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input
              value={this.state.address} 
              onChange={this.handleInputChange}
              name="address" 
              type="Text" 
              placeholder='Address' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input
              value={this.state.city}             
              onChange={this.handleInputChange} 
              name="city" 
              type="Text" 
              placeholder='City' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.state}
              onChange={this.handleInputChange}
              name="state" 
              type="Text" 
              placeholder='State' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              name="phoneNumber" 
              type="number" 
              placeholder='Contact Number' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.price}
              onChange={this.handleInputChange}
              name="price" 
              type="number" 
              placeholder='Monthly Rent' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.numOfBeds}
              onChange={this.handleInputChange}
              name="numOfBeds" 
              type="Number" 
              placeholder='Bedrooms' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.numOfBaths}
              onChange={this.handleInputChange}
              name="numOfBaths" 
              type="Number" 
              placeholder='Bathrooms' 
              isSize="medium" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input 
              value={this.state.propertySize}
              onChange={this.handleInputChange}
              name="propertySize" 
              type="Number" 
              placeholder='Square Feet' 
              isSize="medium" />
            </Control>
          </Field>

          <Field>
            <Control>
              <TextArea 
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description" 
              placeholder='Description' 
              isSize="medium" />
            </Control>
          </Field>

          <Field>
            <Label>Type</Label>
            <Control>
              <Select 
                value={this.state.propertyType}          
                onChange={this.handleInputChange}
                name="propertyType" 
                >
                <option>Single Family</option>
                <option>Apartment</option>
                <option>Duplex</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Laundry</Label>
            <Control>
              <Select 
                value={this.state.laundry}
                onChange={this.handleInputChange}
                name="laundry" >
                <option>In Unit</option>
                <option>On Premise</option>
                <option>None</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Heating</Label>
            <Control>
              <Select 
                value={this.state.heating}
                onChange={this.handleInputChange}
                name="heating" >
                <option>Central</option>
                <option>Radiator</option>
                <option>Wall Heater</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Cooling</Label>
            <Control>
              <Select 
                value={this.state.cooling}
                onChange={this.handleInputChange}
                name="cooling" >
                <option>Central</option>
                <option>Swamp</option>
                <option>Window Mounted</option>
                <option>None</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Pets</Label>
            <Control>
              <Select 
                value={this.state.pets}
                onChange={this.handleInputChange}
                name="pets" >
                <option>Cat</option>
                <option>Dog</option>
                <option>Cat or Dog</option>
                <option>None</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Parking</Label>
            <Control>
              <Select 
                value={this.state.parking}
                onChange={this.handleInputChange}
                name="parking" >
                <option>Covered</option>
                <option>Space</option>
                <option>Street</option>
                <option>None</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Label>Upload Images</Label>
            <Control>
                <Input 
                value={this.state.photos}
                onChange={this.handleInputChange}
                type="file" 
                accept="image/png, image/jpeg" 
                />
            </Control>
          </Field>

          <Button 
          onClick={this.handleFormSubmit} 
          isColor='primary' 
          >
          <p>Submit</p>
          </Button>

        </Container>
    );
  }
};

export default NewPropertyForm;
