import React, { Component } from "react";
import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import 'bulma/css/bulma.css';
import "./RenterApplication.css";
import { connect } from 'react-redux';
import API from "../../utils/API";

import { Z_STREAM_ERROR } from "zlib";


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
    console.log(value);
};

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
        currentAddress: '251 Callan Street Milpitas, Ca',
        referenceName1: this.state.referenceName1,
        referencePhoneNumber1: this.state.referencePhoneNumber1,
        referenceName2: this.state.referenceName2,
        referencePhoneNumber2: this.state.referencePhoneNumber2,
        currentEmployment: this.state.currentEmployment,
        employmentPhoneNumber: this.state.employmentPhoneNumber,
        income: this.state.income,
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
                      name="firstName"
                      type="Text"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Email</Label>
                      <Input 
                      value={this.state.emailAddress}
                      onChange={this.handleInputChange}
                      name="emailAddress"
                      type="Text"
                      type="Email"  />
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
                      name="lastName"
                      type="Text"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Phone Number</Label>
                      <Input 
                      value={this.state.phonenumber}
                      onChange={this.handleInputChange}
                      name="phonenumber"
                      type="Tel"  />
                  </Control>
                </Field>
                </div>
              </div>
              <Field>
                  <Control>
                  <Label>Phone Number</Label>
                      <Input 
                      value={this.state.currentAddress}
                      onChange={this.handleInputChange}
                      name="currentAddress"
                      type="Tel"  />
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
                      type="Text"  />
                  </Control>
                </Field>
                <Field> 
                  <Control>
                  <Label>Reference Name</Label>
                      <Input 
                      value={this.state.referenceName2}
                      onChange={this.handleInputChange}
                      name="referenceName2"
                      type="Text"  />
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
                      name="referencePhoneNumber1"
                      type="Tel"  />
                  </Control>
                </Field>
                <Field>
                  <Control>
                  <Label>Reference Phone Number</Label>
                      <Input 
                      value={this.state.referencePhoneNumber2}
                      onChange={this.handleInputChange}
                      name="referencePhoneNumber2"
                      type="Tel"  />
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
                      name="currentEmployment"
                      type="Text"  />
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
                      name="employmentPhoneNumber"
                      type="Tel"  />
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
                      name="income"
                      type="Number"  />
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
                        name="socialNumber"
                        type="password"  />
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
                        name="driverNumber"
                        type="Number"  />
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
                    name="additionalNotes"/>
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