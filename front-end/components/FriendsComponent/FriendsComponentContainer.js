import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';

class FriendsComponentContainer extends Component {
  render() {
    return <FriendsComponent list={this.list} />;
  }
}

export default FriendsComponentContainer;
