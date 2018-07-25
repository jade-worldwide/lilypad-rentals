import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import { Link } from "react-router-dom";
import API from "../../utils/API";

export class SignUpModal extends Component {
  // Setting our component's initial state
  constructor(props) {
    super(props);
   this.state = {
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    formErrors: {name: "", email: "", phonenumber: "", password: ""},
    nameValid: false,
    emailValid: false,
    phonenumberValid: false,
    passwordValid: false,
    formValid: false
  }
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, 
        () => { this.validateField(name, value) });
    console.log("Input Changed");
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let phonenumberValid = this.state.phonenumber;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }



  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        password: this.state.password

      })
        .then(res => {
        console.log("submitted");
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
            <div className="sign-up-modal columns">
              <div className="column">
              </div>

              <div className="column">
                <h1 className="title user-title">Almost Home!</h1>
                <Field>
                  <Control>
                      <Input 
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          name="email"
                          type="email" 
                          placeholder='Email Address' 
                          isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input 
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      type="Text" 
                      placeholder='Name' 
                      isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input 
                      value={this.state.phonenumber}
                      onChange={this.handleInputChange}
                      name="phonenumber"
                      type="number" 
                      placeholder='Phone Number' 
                      isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input 
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      type="Text" 
                      placeholder='Password' 
                      isSize="medium" />
                  </Control>
                </Field>
                <Button 
                onClick={this.handleFormSubmit} 
                isColor='primary' 
                className="sign-up-button is-medium">
                <p>Sign Up</p>
                </Button>

              </div>


            </div>

    );
  }
}
