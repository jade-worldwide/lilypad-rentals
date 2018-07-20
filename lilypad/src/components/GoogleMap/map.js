import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import lilypad from '../../favicon.ico';
import Toog from '../Lilypads/Lilypad.js'


const TEST_DATA = [
  {
    lat: 37.8716,
    lng: -122.2727,
    text: 'Toogers HQ',
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html'
  },
  {
    lat: 37.8616,
    lng: -122.2627,
    text: 'Toogerland',
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html'
  },
  {
    lat: 36.8616,
    lng: -122.2627,
    text: 'Toogtown',
    link: 'https://sfbay.craigslist.org/eby/apa/d/peaceful-amazing-viewmillion/6643700557.html'
  },
];

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.8716,
      lng: -122.2727
    },
    zoom: 11
  };
 
  render() {
    const toogies = [];
    // this.props.locationData
    for (const datum of TEST_DATA) {
      toogies.push(
        <Toog
          lat={datum.lat}
          lng={datum.lng}
          text={datum.text}
          image={lilypad}
          link={datum.link}
        />
      );
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {toogies}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;