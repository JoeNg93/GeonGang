import React, { Component } from 'react';
import UserProfileScreen from './UserProfileScreen';

class UserProfileScreenContainer extends Component {
  state = {
    selectedIndex: 0
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <UserProfileScreen
        buttons={['wfe', 'wef', 'fqdwe3d']}
        selectedIndex={this.state.selectedIndex}
      />
    );
  }
}

export default UserProfileScreenContainer;
