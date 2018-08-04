import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pad from './pad.svg';
import Marker from '../Marker/Marker.js';
import 'bulma/css/bulma.css';
import "./GoogleMap.css";
import API from "../../utils/API";

export class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.8716,
      lng: -122.2727
    },
    zoom: 11
  };

  state = {
    properties: []
  };

  markerGotClicked = (link) => {

    if (link === this.state.openMarker) {
      // this is already open
      this.setState({
        openMarker: null,
      });
    } else {
      // OTHERWISE, we want this one to be open
      this.setState({
        openMarker: link,
      });
    }
  }

  // When the component mounts, load all properties and save them to this.state.properties
  componentDidMount() {
    this.fetchProperties();
  }

  // Loads all properties  and sets them to this.state.properties
  fetchProperties = () => {
    API.getProperties()
      .then(res =>
        this.setState({ properties: res.data })
      ).catch(err => console.log(err));
  };

  render() {
    const { properties } = this.state
    // console.log("Dummy Data: ", TEST_DATA)
    // console.log("Real Data: ", propertyMarkers)
    const markers = properties.map((marker, index) => {
      return <Marker
        key={index}
        lat={marker.latitude}
        lng={marker.longitude}
        text={"Hello World"}
        image={pad}
      //image={datum.text} for actual version
      // link={datum.link}
      // onClick={() => this.markerGotClicked(datum.link)}
      // isBoxVisible={datum.link === this.state.openMarker}
      />
    })

    return (
      // Important! Always set the container height explicitly
      <div className="map-div">
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}
