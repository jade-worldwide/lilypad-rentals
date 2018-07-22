import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import { Link } from "react-router-dom";
import API from "../../utils/API";


export class SignUpModal extends Component {
  // Setting our component's initial state
  state = {
    name: "",
    email: "",
    username: "",
    phonenumber: "",
    password: "",
    password2: ""
  }

  componentDidMount() {
    this.loadUsers();
  }
  loadUsers = () => {
  API.getUser()
  .then(res => 
    this.setState({ user: res.data, 
      name: "",
      email: "",
      username: "",
      phonenumber: "",
      password: "",
      password2: ""
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
    if (this.state.name) {
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        phonenumber: this.state.phonenumber,
        password: this.state.password,
        password2: this.state.password2

      })
        .then(res => this.loadUsers(),
        console.log("submitted"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
            <div className="sign-up-modal">

                  <ModalCardBody>
                    <Field>
                      <Control>
                          <Input 
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          name="username"
                          type="Text" 
                          placeholder='username' 
                          isSize="medium" />
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                          <Input 
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          name="email"
                          type="Text" 
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
                          type="number" isSize="medium" />
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
                    <Field>
                      <Control>
                          <Input 
                          value={this.state.password2}
                          onChange={this.handleInputChange}
                          name="password2" 
                          type="Text"
                          placeholder='Password2' 
                          isSize="medium" />
                      </Control>
                    </Field>
                    <Button 
                    onClick={this.handleFormSubmit} 
                    isColor='primary' 
                    className="sign-up-button is-medium">
                    <p>Sign Up</p>
                    </Button>
                  </ModalCardBody>

            </div>

    );
  }
}
