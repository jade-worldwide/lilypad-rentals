import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./RenterApplication.css";
import { connect } from 'react-redux';
import API from "../../utils/API";

import { Z_STREAM_ERROR } from "zlib";

let income;

class RenterApplication extends Component {

  state = {
    file: "",
    name: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phonenumber: '',
    currentAddress: '',
    referenceName1: '',
    referencePhoneNumber1: '',
    referenceName2: '',
    referencePhoneNumber2: '',
    currentEmployment: '',
    employmentPhoneNumber: '',
    income: '',
    pets: '',
    socialNumber: '',
    driverNumber: '',
    additionalNotes: ''
  };


  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  formatPhoneNumber = event => {
        
        let {name, value } = event.target
        let numbers = value.replace(/\D/g, '')
        let char = { 0: '(', 3: ') ', 6: '-' };
        value = '';

        for (var i = 0; i < numbers.length; i++) {
            this.setState({[name]: value += (char[i] || '') + numbers[i]})
        }
  }

  formatThousands = event => {

      let {name, value} = event.target;
      let x;
      let x1;
      let x2;
      let number = value.replace(/,/g, "")
      value = "";
      number += '';
      x = number.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';

      var rgx = /(\d+)(\d{3})/;

      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      this.setState({[name]: value = x1 + x2})

      // Unformat PropertySize & Price in before we push into database
      income = this.state.income.replace( /,/g, "" )
  }
    consoleLogInput = event => {
    const { name, value } = event.target;

    console.log(`${name}: ${value}`)

    }
  handleFormSubmit = event => {
    event.preventDefault();
    const { user } = this.props;
    this.state.name = this.state.firstName + '' + this.state.lastName;
    console.log(user)
    if (this.state.name) {
      console.log("Submitting")
      API.saveApplication({
        name: this.state.name,
        emailAddress: this.state.emailAddress,
        phonenumber: this.state.phonenumber,
        currentAddress: this.state.currentAddress,
        referenceName1: this.state.referenceName1,
        referencePhoneNumber1: this.state.referencePhoneNumber1,
        referenceName2: this.state.referenceName2,
        referencePhoneNumber2: this.state.referencePhoneNumber2,
        currentEmployment: this.state.currentEmployment,
        employmentPhoneNumber: this.state.employmentPhoneNumber,
        income: income,
        pets: this.state.pets,
        socialNumber: this.state.socialNumber,
        driverNumber: this.state.driverNumber,
        additionalNotes: this.state.additionalNotes,
        user
      })
        .then(res => console.log("submitted", this.state.currentAddress))
        .catch(err => console.log(err));
    } else {
      console.log("Not Submitting")
    }
  };

  render() {
    const { user } = this.props;
    return (
      <Container>
        <div className="columns">
          <div className="column">
            <Field>
              <Control>
                <Label>First Name</Label>
                <Input
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="firstName"
                  type="Text" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Email</Label>
                <Input
                  value={this.state.emailAddress}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="emailAddress"
                  type="Text"
                  type="Email" />
              </Control>
            </Field>
          </div>
          <div className="column">
            <Field>
              <Control>
                <Label>Last Name</Label>
                <Input
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="lastName"
                  type="Text" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Phone Number</Label>
                <Input
                  value={this.state.phonenumber}
                  onChange={this.handleInputChange}
                  onKeyUp={this.formatPhoneNumber}
                  onBlur={this.consoleLogInput}
                  name="phonenumber"
                  type="Tel" />
              </Control>
            </Field>
          </div>
        </div>
        <Field>
          <Control>
            <Label>Current Address</Label>
            <Input
              value={this.state.currentAddress}
              onChange={this.handleInputChange}
              onBlur={this.consoleLogInput}
              name="currentAddress"
              type="Tel" />
          </Control>
        </Field>

        <div className="columns">
          <div className="column">
            <Field>
              <Control>
                <Label>Reference Name</Label>
                <Input
                  value={this.state.referenceName1}
                  onChange={this.handleInputChange}
                  name="referenceName1"
                  type="Text" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Reference Name</Label>
                <Input
                  value={this.state.referenceName2}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="referenceName2"
                  type="Text" />
              </Control>
            </Field>
          </div>

          <div className="column">
            <Field>
              <Control>
                <Label>Reference Phone Number</Label>
                <Input
                  value={this.state.referencePhoneNumber1}
                  onChange={this.handleInputChange}
                  onKeyUp={this.formatPhoneNumber}
                  onBlur={this.consoleLogInput}
                  name="referencePhoneNumber1"
                  type="Tel" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Reference Phone Number</Label>
                <Input
                  value={this.state.referencePhoneNumber2}
                  onChange={this.handleInputChange}
                  onKeyUp={this.formatPhoneNumber}
                  onBlur={this.consoleLogInput}
                  name="referencePhoneNumber2"
                  type="Tel" />
              </Control>
            </Field>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Field>
              <Control>
                <Label>Place of Employment</Label>
                <Input
                  value={this.state.currentEmployment}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="currentEmployment"
                  type="Text" />
              </Control>
            </Field>
          </div>

          <div className="column">
            <Field>
              <Control>
                <Label>Workplace Phone Number</Label>
                <Input
                  value={this.state.employmentPhoneNumber}
                  onChange={this.handleInputChange}
                  onKeyUp={this.formatPhoneNumber}
                  onBlur={this.consoleLogInput}
                  name="employmentPhoneNumber"
                  type="text" />
              </Control>
            </Field>
          </div>

          <div className="column">
            <Field>
              <Control>
                <Label>Annual Salary</Label>
                <Input
                  value={this.state.income}
                  onChange={this.handleInputChange}
                  onKeyUp={this.formatThousands}
                  onBlur={this.consoleLogInput}
                  name="income"
                  type="text" />
              </Control>
            </Field>
          </div>

        </div>

        <div className="columns">
          <div className="column">
            <Field>
              <Label>Pets</Label>
              <Control>
                <Select
                  value={this.state.pets}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="pets" >
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
              <Control>
                <Label>Social Security Number</Label>
                <Input
                  value={this.state.socialNumber}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="socialNumber"
                  type="password" />
              </Control>
            </Field>
          </div>

          <div className="column">
            <Field>
              <Control>
                <Label>Driver License</Label>
                <Input
                  value={this.state.driverNumber}
                  onChange={this.handleInputChange}
                  onBlur={this.consoleLogInput}
                  name="driverNumber"
                  type="text" />
              </Control>
            </Field>
          </div>

        </div>

        <Field>
          <Control>
            <Label>Additional Notes</Label>
            <TextArea
              value={this.state.additionalNotes}
              onChange={this.handleInputChange}
              onBlur={this.consoleLogInput}
              name="additionalNotes" />
          </Control>
        </Field>


        <Button onClick={this.handleFormSubmit} isColor='primary' className=""><p>Save</p></Button>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});


export default connect(mapStateToProps)(RenterApplication)