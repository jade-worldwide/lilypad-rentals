import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";




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

    <Field>
      <Control>
          <TextArea placeholder='Description' isSize="medium" />
      </Control>
    </Field>

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

    <Button isColor='primary' className=""><p>Submit</p></Button>
          </Container>
  );
}
}
