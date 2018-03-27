import React, { Component } from 'react';
import LocationScreen from './LocationScreen';
import axios from 'axios';
import { connect } from 'react-redux';
import { Permissions, Location } from 'expo';
import { setClimate } from '../../actions/userInput';

class LocationScreenContainer extends Component {
  state = {
    located: false
  };

  locationInfo = {
    location: '',
    climate: ''
  };

  displayLocation = async event => {
    // Get location
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    const location = await Location.getCurrentPositionAsync({});
    const { longitude, latitude } = location.coords;

    // Get address from lat long
    const googleGeocodingAPIKey = 'AIzaSyAOUD65brzaFSX3JgNegjn9j6movT2fDDI';
    const locationData = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleGeocodingAPIKey}`
    );

    // Get climate info
    const { data: climateInfo } = await axios.get(
      `http://climateapi.scottpinkelman.com/api/v1/location/${latitude}/${longitude}`
    );
    this.props.setClimate(climateInfo.return_values[0].koppen_geiger_zone);

    this.locationInfo.location = locationData.data.results[0].formatted_address;
    this.locationInfo.climate = climateInfo.return_values[0].zone_description;
    this.setState({ located: true });
  };

  render() {
    return (
      <LocationScreen
        located={this.state.located}
        locationInfo={this.locationInfo}
        clickHandle={this.displayLocation}
      />
    );
  }
}

export default connect(null, { setClimate })(LocationScreenContainer);
