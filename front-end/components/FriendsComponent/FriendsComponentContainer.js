import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getOtherUserProfile } from '../../actions/user_info';
import { openOtherUserProfileModal } from '../../actions/modals_control';

class FriendsComponentContainer extends Component {
  state = {
    modalVisible: false,
    currentFriendSearchTerm: ''
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  onPressFriend = async userId => {
    await this.props.getOtherUserProfile(userId);
    this.props.openOtherUserProfileModal();
  };

  render() {
    const {
      myProfile,
      otherUserProfile,
      otherUserProfileModalVisible
    } = this.props;
    let userProfile = {};

    if (otherUserProfileModalVisible) {
      userProfile = otherUserProfile;
    } else {
      userProfile = myProfile;
    }

    if (_.isEmpty(userProfile)) {
      return null;
    }

    const friends = userProfile.friends.filter(
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
        onPressFriend={this.onPressFriend}
      />
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.userInfo.myProfile,
  otherUserProfile: state.userInfo.otherUserProfile,
  otherUserProfileModalVisible: state.modal.otherUserProfileModalVisible
});

export default connect(mapStateToProps, {
  getOtherUserProfile,
  openOtherUserProfileModal
})(FriendsComponentContainer);
