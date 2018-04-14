import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';
import { connect } from 'react-redux';
import _ from 'lodash';

class FriendsComponentContainer extends Component {
  state = {
    modalVisible: false,
    currentFriendSearchTerm: ''
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { userInfo } = this.props;
    if (_.isEmpty(userInfo)) {
      return null;
    }

    const friends = userInfo.friends.filter(
      friend => friend.name.indexOf(this.state.currentFriendSearchTerm) !== -1
    );

    return (
      <FriendsComponent
        numOfFriends={friends.length}
        list={friends}
        modalVisible={this.state.modalVisible}
        setModalVisible={this.setModalVisible}
        currentFriendSearchTerm={this.state.currentFriendSearchTerm}
        onChangeSearchBar={newTerm =>
          this.setState({ currentFriendSearchTerm: newTerm })}
      />
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo.userInfo
});

export default connect(mapStateToProps, {})(FriendsComponentContainer);
