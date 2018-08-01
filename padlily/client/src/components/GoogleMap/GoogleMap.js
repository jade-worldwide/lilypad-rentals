import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pad from './pad.svg';
import Marker from '../Marker/Marker.js';
import 'bulma/css/bulma.css';
import "./GoogleMap.css";



// Import data here
const TEST_DATA = [
  {
    lat: 37.8716,
    lng: -122.2727,
    text: 'Toogers HQ',
    image: "None",
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html#1'
  },
  {
    lat: 37.8616,
    lng: -122.2627,
    text: 'Toogerland',
    image: "None",
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html#2'
  },
  {
    lat: 36.8616,
    lng: -122.2627,
    text: 'Toogtown',
    image: "None",
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html#3'
  },
];

export class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.8716,
      lng: -122.2727
    },
    zoom: 11
  };

  state = {
    openMarker: null,
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

  render() {
    const markers = [];
    for (const datum of TEST_DATA) {
      markers.push(
        <Marker
          lat={datum.lat}
          lng={datum.lng}
          text={datum.text}
          image={pad}
          //image={datum.text} for actual version
          link={datum.link}
          onClick={() => this.markerGotClicked(datum.link)}
          isBoxVisible={datum.link === this.state.openMarker}
        />
      );
    }
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
