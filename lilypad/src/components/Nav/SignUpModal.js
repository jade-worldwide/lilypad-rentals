import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';
import { Link } from "react-router-dom";


export class SignUpModal extends Component {
  // Setting our component's initial state


  render() {
    return (
            <div className="sign-up-modal columns">
              <div className="column">
              </div>

              <div className="column">
                <h1 className="title user-title">Almost Home!</h1>
                <Field>
                  <Control>
                      <Input type="email" placeholder='Email Address' isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input type="text" placeholder='Name' isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input type="text" placeholder='Phone Number' isSize="medium" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                      <Input type="password" placeholder='Password' isSize="medium" />
                  </Control>
                </Field>
                <Button isColor='primary' className="sign-up-button is-medium"><p>Sign Up</p></Button>

              </div>


            </div>

    );
  }
}
