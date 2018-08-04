import React, { Component } from "react";
import { Field, Label, Control, Input, Button, Checkbox } from 'bloomer';
import 'bulma/css/bulma.css';
import "./ResultsList.css";

export class Filters extends Component {

  render() {

    return (
      <div className="filters">
        <Field>
          <Label>Minimum Bedrooms</Label>
          <Control>
            <Input type="number" value="1" />
          </Control>
        </Field>
        <Field>
          <Label>Minimum Bathrooms</Label>
          <Control>
            <Input type="number" value="1" />
          </Control>
        </Field>
        <Field>
          <Label>Max Price</Label>
          <Control>
            <Input type="number" value="3000" />
          </Control>
        </Field>
        <Field>
          <Label>Pets</Label>
          <Control>
            <Checkbox> Cats</Checkbox>
          </Control>
          <Control>
            <Checkbox> Dogs</Checkbox>
          </Control>
        </Field>



        <Button isColor='primary' className="apply-filters"><p>Apply</p></Button>
      </div>
    )

  }
}
