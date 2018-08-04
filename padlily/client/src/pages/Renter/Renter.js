import React, { Component } from "react";
import RenterApplication from "../../components/RenterApplication/RenterApplication";
import "./Renter.css";

class Renter extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="renter">
        <RenterApplication />
      </div>
    );
  }
}

export default Renter;
