import React, { Component } from "react";
// import API from "../../utils/API";
// import { Field, Control, Input, Button, TextArea, Select, Label, Container } from 'bloomer';
import NewPropertyForm from "../../components/NewPropertyForm";


class Manager extends Component {
  // Setting our component's initial state
  state = {
  };

  render() {
    return (
      <div className="Manager">
          <NewPropertyForm 
          /> 
      </div>
    );
  }
}

export default Manager;
