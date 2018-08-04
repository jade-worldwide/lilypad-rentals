import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";
import ImageUploader from 'react-images-upload';




export class NewPropertyForm extends Component {

  state = {
    file: ""
  };

  handleFileChange = (event) => {
   this.setState({file: event.target.value});
   console.log("file: " + this.state.file);
  }



  render() {
    return (
            <Container>
              <h1 className="title has-text-centered">New Property</h1>
    <Field>
      <Label>Title</Label>
      <Control>
          <Input type="Text" placeholder='Title'   />
      </Control>
    </Field>
    <div className="columns">
      <div className="column">
        <Field>
          <Label>Monthly Rent</Label>
          <Control>
              <Input type="number" placeholder='Monthly Rent'   />
          </Control>
        </Field>
      </div>
      <div className="column">
        <Field>
          <Label>Bedrooms</Label>
          <Control>
              <Input type="Number" placeholder='Bedrooms'   />
          </Control>
        </Field>
      </div>
      <div className="column">
        <Field>
          <Label>Bathrooms</Label>
          <Control>
              <Input type="Number" placeholder='Bathrooms'   />
          </Control>
        </Field>
      </div>
      <div className="column">
        <Field>
          <Label>Square Feet</Label>
          <Control>
              <Input type="Number" placeholder='Square Feet'   />
          </Control>
        </Field>
      </div>
    </div>

    <Field>
      <Label>Description</Label>
      <Control>
          <TextArea placeholder='Description'   />
      </Control>
    </Field>

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
      </div>
      <div className="column">
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
      </div>
      <div className="column">
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
    </div>

    <div className="columns">
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
      </div>
      <div className="column">
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
      </div>
      <div className="column">
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

    <Field>
      <Label>Upload Images</Label>
      <Control>
          <Input
            type="file"
            accept="image/png, image/jpeg"
            name="file"
            value={this.state.file}
            className="file-upload"
            onChange={this.handleFileChange}/>
      </Control>
    </Field>

    <ImageUploader
      withIcon={true}
      buttonText='Choose images'
      onChange={this.onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
      withPreview={true}
      />

    <Button isColor='primary' className=""><p>Submit</p></Button>
          </Container>
  );
}
}
