import React, { Component } from "react";
import {/* Field, Control, Input,*/ Button,/* TextArea, Select, Label, Container*/ } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';




export class FormPageFour extends Component {

  state = {
    file: ""
  };





  render() {
    return (
            <div className="form-four">
              <h1 className="title has-text-centered">Upload Images</h1>
                <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                  withPreview={true}
                  />
                    <Button isColor='primary' className=""><p>Submit</p></Button>
            </div>
  );
}
}
