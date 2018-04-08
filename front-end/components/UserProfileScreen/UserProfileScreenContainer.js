import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UserProfileScreen from './UserProfileScreen';

class UserProfileScreenContainer extends Component {
  state = {
    selectedIndex: 0
  };

  updateIndex = this.updateIndex.bind(this);

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Profile', 'Friends', 'Reviews'];
    return (
      <UserProfileScreen
        buttons={buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
      />
    );
  }
}

export default UserProfileScreenContainer;
