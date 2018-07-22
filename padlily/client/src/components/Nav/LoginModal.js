import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import { Alert } from 'react-bootstrap';
import API from "../../utils/API";
// import axios from "axios";

export class LoginModal extends Component {
  // Setting our component's initial state
  state = {
    username: "",
    password: "",
    message: ""
  }

  componentDidMount() {
    this.loadUsers();
  }
  loadUsers = () => {
  API.getUser()
  .then(res => 
    this.setState({ user: res.data, 
      username: "",
      password: ""
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
    if (this.state.username) {
      API.loginUser({
        username: this.state.username,
        password: this.state.password

      })        
        .then(res => this.loadUsers(),
        console.log("Logged In!"))
        .catch(err => console.log(err));
    }
      };

  render() {
    return (
            <div className="sign-up-modal">

                  <ModalCardBody>
                  <Alert bsStyle="warning" hasTextAlign="centered">
                      <strong>Ge Wilikers Batman! Something went wrong!</strong>
                  </Alert>
                    <Field>
                      <Control>
                          <Input
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          name="username"
                          type="Text" 
                          placeholder='Username' 
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
                    className="login-button is-medium">
                    <p>Login</p>
                    </Button>
                  </ModalCardBody>

            </div>

    );
  }
}