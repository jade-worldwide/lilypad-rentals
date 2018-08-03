import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./RenterApplication.css";




export class RenterApplication extends Component {

  state = {
    file: ""
  };

  render() {
      return (
              <Container>
              <div className="columns">
                <div className="column">
                <Field>
                  <Control>
                  <Label>First Name</Label>
                      <Input type="Text"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Email</Label>
                      <Input type="Email"  />
                  </Control>
                </Field>
                </div>
                <div className="column">
                <Field>
                  <Control>
                  <Label>Last Name</Label>
                      <Input type="Text"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Phone Number</Label>
                      <Input type="Tel"  />
                  </Control>
                </Field>
                </div>
              </div>
              <Field>
                <Control>
                <Label>Current Address</Label>
                    <Input type="Text"  />
                </Control>
              </Field>

              <div className="columns">
                <div className="column">
                <Field>
                  <Control>
                  <Label>Reference Name</Label>
                      <Input type="Text"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Reference Name</Label>
                      <Input type="Text"  />
                  </Control>
                </Field>
                </div>

                <div className="column">
                <Field>
                  <Control>
                  <Label>Reference Phone Number</Label>
                      <Input type="Tel"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Reference Phone Number</Label>
                      <Input type="Tel"  />
                  </Control>
                </Field>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                <Field>
                  <Control>
                  <Label>Place of Employment</Label>
                      <Input type="Text"  />
                  </Control>
                </Field>
                </div>

                <div className="column">
                <Field>
                  <Control>
                  <Label>Workplace Phone Number</Label>
                      <Input type="Tel"  />
                  </Control>
                </Field>
                </div>

                <div className="column">
                <Field>
                  <Control>
                  <Label>Annual Salary</Label>
                      <Input type="Number"  />
                  </Control>
                </Field>
                </div>

              </div>

              <div className="columns">
                <div className="column">
                  <Field>
                      <Label>Pets</Label>
                      <Control>
                          <Select>
                              <option>Select</option>
                              <option>Cat</option>
                              <option>Dog</option>
                              <option>Cat and Dog</option>
                              <option>None</option>
                          </Select>
                      </Control>
                  </Field>
                </div>

                <div className="column">
                  <Field>
                    <Control>
                    <Label>Social Security Number</Label>
                        <Input type="Number"  />
                    </Control>
                  </Field>
                </div>

                <div className="column">
                  <Field>
                    <Control>
                    <Label>Driver License</Label>
                        <Input type="Number"  />
                    </Control>
                  </Field>
                </div>

              </div>

              <Field>
                <Control>
                <Label>Additional Notes</Label>
                    <TextArea  />
                </Control>
              </Field>


              <Button isColor='primary' className=""><p>Save</p></Button>
            </Container>
    );
  }
}
