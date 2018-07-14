import React, { Component } from "react";
import SimpleMap from "../../components/GoogleMap/map";

class Map extends Component {
    // Setting our component's initial state
    state = {
    };
  
  
  
  
    render() {
      return (
        <div className="Map">
          <SimpleMap />
        </div>
      );
    }
  }
  
  export default Map;