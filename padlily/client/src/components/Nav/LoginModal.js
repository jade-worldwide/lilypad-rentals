import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import API from "../../utils/API";

export class LoginModal extends Component {
  // Setting our component's initial state
  state = {
    email: "",
    password: ""
  }

  // componentDidMount() {
  //   this.loadUsers();
  // }
  // loadUsers = () => {
  // API.getUsers()
  // .then(res => 
  //   this.setState({ user: res.data, 
  //     email: "",
  //     password: ""
  // }))
  // .catch(err => console.log(err));
  // };

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
        email: this.state.email,
        password: this.state.password

      })
        .then(res => {
          console.log("Logged In");
          // this.loadUsers();
        })
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
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          name="email"
                          type="email" 
                          placeholder='Email' 
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
