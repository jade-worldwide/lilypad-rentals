import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';




export class FormPageTwo extends Component {

  state = {
    file: ""
  };





  render() {
    return (
            <div className="form-two">
              <h1 className="title has-text-centered">Describe Your Property</h1>
                <Field>
                  <Control>
                      <TextArea placeholder='Description' isSize="medium" />
                  </Control>
                </Field>
            </div>
  );
}
}
