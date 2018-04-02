import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';

class FriendsComponentContainer extends Component {
  state = {
    list: [
      {
        name: 'Amy Farha',
        avatar_url: 'https://randomuser.me/api/portraits/women/65.jpg'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://randomuser.me/api/portraits/men/46.jpg'
      },
      {
        name: 'Jessica Smith',
        avatar_url: 'https://randomuser.me/api/portraits/women/26.jpg'
      },
      {
        name: 'Kelly Daniels',
        avatar_url:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTg5NTgwNF5BMl5BanBnXkFtZTgwMjQ4MTE2NDE@._V1_UY256_CR43,0,172,256_AL_.jpg'
      }
    ],

    numOfFriends: ''
  };

  render() {
    return (
      <FriendsComponent
        numOfFriends={this.state.numOfFriends}
        list={this.state.list}
      />
    );
  }
}

export default FriendsComponentContainer;
