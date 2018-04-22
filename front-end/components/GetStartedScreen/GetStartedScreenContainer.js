import React, { Component } from 'react';
import GetStartedScreen from "./GetStartedScreen";

class GetStartedScreenContainer extends Component {
  onPressNextStep = async () => {
    this.props.navigation.navigate('loginScreen');
  };

  render() {
    return (
      <GetStartedScreen
        onPressNextStep={this.onPressNextStep}
      />
    );
  }
}

export default GetStartedScreenContainer;
