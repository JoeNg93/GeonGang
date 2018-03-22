import React, { Component } from 'react';
import LocationScreen from './LocationScreen';

class LocationScreenContainer extends Component {
	state = {
		located: false
	};

	locationInfo = {
		location: '',
		climate: ''
	};

	displayLocation = event => {
		this.locationInfo.location = 'Oulu, Finland';
		this.locationInfo.climate = 'Shitty dry climate';
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

export default LocationScreenContainer;
