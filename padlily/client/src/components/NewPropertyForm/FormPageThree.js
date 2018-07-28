import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';




export class FormPageThree extends Component {

  state = {
    file: ""
  };





  render() {
    return (
            <div className="form-three">
              <h1 className="title has-text-centered">Additional Info</h1>
              <div className="columns">
                <div className="column">
                  <Field>
                      <Label>Type</Label>
                      <Control>
                          <Select>
                            <option>Select</option>
                              <option>Single Family</option>
                              <option>Apartment</option>
                              <option>Duplex</option>
                          </Select>
                      </Control>
                  </Field>

                  <Field>
                      <Label>Laundry</Label>
                      <Control>
                          <Select>
                            <option>Select</option>
                              <option>In Unit</option>
                              <option>On Premise</option>
                              <option>None</option>
                          </Select>
                      </Control>
                  </Field>

                  <Field>
                      <Label>Heating</Label>
                      <Control>
                          <Select>
                            <option>Select</option>
                              <option>Central</option>
                              <option>Radiator</option>
                              <option>Wall Heater</option>
                          </Select>
                      </Control>
                  </Field>
                </div>
                <div className="column">
                  <Field>
                      <Label>Cooling</Label>
                      <Control>
                          <Select>
                            <option>Select</option>
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
                          <Select>
                              <option>Select</option>
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
                          <Select>
                            <option>Select</option>
                              <option>Covered</option>
                              <option>Space</option>
                              <option>Street</option>
                              <option>None</option>
                          </Select>
                      </Control>
                  </Field>
                </div>
              </div>
            </div>
  );
}
}
