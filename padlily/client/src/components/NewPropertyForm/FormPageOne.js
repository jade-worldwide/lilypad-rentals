import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";



export class FormPageOne extends Component {

  state = {
    property: [],
    title: '',
    price: '',
    numOfbeds: '',
    numOfBaths: '',
    propertySize: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { user } = this.props;
    console.log(user)
    if (this.state.title && this.state.numOfBeds && this.state.propertySize && this.state.numOfBaths &&
        this.state.price) {
        console.log("Submitting")
        API.saveProperty({
            title: this.state.title,
            propertySize: this.state.propertySize,
            numOfBeds: this.state.numOfBeds,
            numOfBaths: this.state.numOfBaths,
            price: this.state.price,
        })
        .then(res => console.log("submitted"))
        .catch(err => console.log(err));
    } else {
        console.log("Not Submitting")
    }
};

  render() {
    return (
            <div className="form-one">
              <h1 className="title has-text-centered">New Property Info</h1>
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
            </div>
  );
}
}
