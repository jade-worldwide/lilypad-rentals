import React from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./NewPropertyForm.css";

const NewPropertyForm = props => (
          <Container>
  <Field>
    <Control>
        <Input name="title" type="Text" placeholder='Title' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="address" type="Text" placeholder='Address' isSize="medium" />
    </Control>
    </Field>
    <Field>
    <Control>
        <Input name="city" type="Text" placeholder='City' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="state" type="Text" placeholder='State' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="price" type="number" placeholder='Monthly Rent' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="numOfBeds" type="Number" placeholder='Bedrooms' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="numOfBaths" type="Number" placeholder='Bathrooms' isSize="medium" />
    </Control>
  </Field>
  <Field>
    <Control>
        <Input name="propertySize" type="Number" placeholder='Square Feet' isSize="medium" />
    </Control>
  </Field>

  <Field>
    <Control>
        <TextArea name="description" placeholder='Description' isSize="medium" />
    </Control>
  </Field>

  <Field>
      <Label>Type</Label>
      <Control>
          <Select name="propertyType" >
              <option>Single Family</option>
              <option>Apartment</option>
              <option>Duplex</option>
          </Select>
      </Control>
  </Field>

  <Field>
      <Label>Laundry</Label>
      <Control>
          <Select name="laundry" >
              <option>In Unit</option>
              <option>On Premise</option>
              <option>None</option>
          </Select>
      </Control>
  </Field>

  <Field>
      <Label>Heating</Label>
      <Control>
          <Select name="heating" >
              <option>Central</option>
              <option>Radiator</option>
              <option>Wall Heater</option>
          </Select>
      </Control>
  </Field>

  <Field>
      <Label>Cooling</Label>
      <Control>
          <Select name="cooling" >
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
          <Select name="pets" >
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
          <Select name="parking" >
              <option>Covered</option>
              <option>Space</option>
              <option>Street</option>
              <option>None</option>
          </Select>
      </Control>
  </Field>

  {/* <Field>
    <Label>Upload Images</Label>
    <Control>
        <Input type="file" accept="image/png, image/jpeg" />
    </Control>
  </Field> */}


  <Button onClick={this.handleFormSubmit} isColor='primary' className="" {...props}><p>Submit</p>
  {props.children}
  </Button>
        </Container>
);

export default NewPropertyForm;
