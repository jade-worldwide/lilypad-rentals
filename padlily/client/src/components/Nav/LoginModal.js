import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {login} from '../../actions/authActions'

class LoginModal extends Component {
  // Setting our component's initial state
  state = {
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Input Changed");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    if (email && password) {
      this.props.login({email, password})
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
                          type="password" 
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

const mapStateToProps = ({auth}) => ({
  user: auth.user
});


const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)