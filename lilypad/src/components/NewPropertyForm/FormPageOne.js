import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';




export class FormPageOne extends Component {

  state = {
    file: ""
  };





  render() {
    return (
            <div className="form-one">
              <h1 className="title has-text-centered">New Property Info</h1>
              <Field>
                <Control>
                    <Input type="Text" placeholder='Title' isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                    <Input type="number" placeholder='Monthly Rent' isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                    <Input type="Number" placeholder='Bedrooms' isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                    <Input type="Number" placeholder='Bathrooms' isSize="medium" />
                </Control>
              </Field>
              <Field>
                <Control>
                    <Input type="Number" placeholder='Square Feet' isSize="medium" />
                </Control>
              </Field>
            </div>
  );
}
}
