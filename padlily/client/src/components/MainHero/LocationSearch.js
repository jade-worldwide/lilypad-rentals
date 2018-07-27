import React from 'react';
import 'bulma/css/bulma.css';
import "./MainHero.css";
import { Input } from 'bloomer';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
     });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        // this.setState({
        //   latitude: lat,
        //   longitude: lng,
        //   isGeocoding: false,
        // });
        let urlParams = selected.split(",")
        let city = urlParams[0]
        let state = urlParams[1].replace(/ /g, '')
        console.log(city)
        console.log(state)
        window.location.href = "http://localhost:3000/results?city=" + city + "&state=" + state;
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };;

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {

    const {
      address,
      // errorMessage,
      // latitude,
      // longitude,
      // isGeocoding,
    } = this.state;

    return (
      <PlacesAutocomplete
        onChange={this.handleChange}
        value={address}
        onSelect={this.handleSelect}
        onError={this.handleError}

      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="location-input-div">

            <div className="search-input">
              <i class="fal fa-search search-input-icon"></i>
              <Input
                {...getInputProps({
                  placeholder: 'Try "Berkeley"',
                  className: 'location-search-input',
                })}
              />
              {this.state.address.length > 0 && (
                <button
                  className="clear-button"
                  onClick={this.handleCloseClick}
                >
                  <i class="far fa-times"></i>
                </button>
              )}
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}