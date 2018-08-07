import React, { Component } from "react";
import { Field, Label, Control, Input, Button, Checkbox } from 'bloomer';
import 'bulma/css/bulma.css';
import { Slider, Switch, Tooltip } from 'antd';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import "./ResultsList.css";




export class Filters extends Component {


  render() {

return (
    <div className="filters">
      <Field>
        <Label>Bedrooms</Label>
        <Control>
          <Slider range defaultValue={[0, 3]} min={0} max={10}/>
          <div className="slider-output">
            <p>Min: 0</p>
            <p className="max">Max: 10</p>
          </div>
        </Control>
      </Field>
      <Field>
        <Label>Bathrooms</Label>
        <Control>
          <Slider range defaultValue={[0, 3]} min={0} max={10}/>
          <div className="slider-output">
            <p>Min: 0</p>
            <p className="max">Max: 10</p>
          </div>
        </Control>
      </Field>
      <Field>
        <Label>Max Price</Label>
        <Control>
          <Slider range defaultValue={[0, 10000]} min={0} max={10000}/>
          <div className="slider-output">
            <p>Min: 0</p>
            <p className="max">Max: 10</p>
          </div>
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
