import React from "react";
import { Field, Label, Control, Input, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import "./ResultsList.css";

export const Filters = () => (
  <div className="filters">
    <Field>
      <Label>Minimum Bedrooms</Label>
      <Control>
          <Input type="number" value="1" isSize="medium" />
      </Control>
    </Field>
    <Field>
      <Label>Max Price</Label>
      <Control>
          <Input type="number" value="3000" isSize="medium" />
      </Control>
    </Field>
      <Button isColor='primary' className=""><p>Apply</p></Button>
  </div>



);
