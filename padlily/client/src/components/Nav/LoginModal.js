import React, { Component } from "react";
import { ModalCardBody, Button, Field, Control, Input } from 'bloomer';


export class LoginModal extends Component {
  // Setting our component's initial state


  render() {
    return (
            <div className="sign-up-modal">

                  <ModalCardBody>
                    <Field>
                      <Control>
                          <Input type="email" placeholder='Email Address' isSize="medium" />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                          <Input type="password" placeholder='Password' isSize="medium" />
                      </Control>
                    </Field>
                    <Button isColor='primary' className="login-button is-medium"><p>Login</p></Button>
                  </ModalCardBody>

            </div>

    );
  }
}
