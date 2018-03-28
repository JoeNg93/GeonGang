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
    climate: '',
    city: '',
    country: ''
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
    const locationDataComponent =
      locationData.data.results[0].address_components;

    // Get climate info
    const { data: climateInfo } = await axios.get(
      `http://climateapi.scottpinkelman.com/api/v1/location/${latitude}/${longitude}`
    );
    this.props.setClimate(climateInfo.return_values[0].koppen_geiger_zone);

    locationDataComponent.forEach(component => {
      if (
        component.types.includes('locality') ||
        component.types.includes('sublocality') ||
        component.types.includes('neighborhood')
      ) {
        this.locationInfo.city = component.long_name;
      }
      if (component.types.includes('country')) {
        this.locationInfo.country = component.long_name;
      }
    });
    this.locationInfo.location =
      this.locationInfo.city + ', ' + this.locationInfo.country;
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
