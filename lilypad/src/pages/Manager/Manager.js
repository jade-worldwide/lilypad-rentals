import React, { Component } from "react";
import { NewPropertyForm } from "../../components/NewPropertyForm";
import { PropertyList } from "../../components/PropertyList";


class Manager extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Manager">
          <PropertyList />
          <NewPropertyForm />

      </div>
    );
  }
}

export default Manager;
