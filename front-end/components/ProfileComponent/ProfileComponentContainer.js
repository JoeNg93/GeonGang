import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';
import { connect } from 'react-redux';
import _ from 'lodash';

class ProfileComponentContainer extends Component {
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

    const {
      age,
      gender,
      skinColor,
      skinType,
      climate,
      skinCondition
    } = userProfile;

    return (
      <ProfileComponent
        age={age}
        gender={gender}
        climate={climate}
        skinColor={skinColor}
        skinType={skinType}
        skinCondition={skinCondition}
      />
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.userInfo.myProfile,
  otherUserProfile: state.userInfo.otherUserProfile,
  otherUserProfileModalVisible: state.modal.otherUserProfileModalVisible
});

export default connect(mapStateToProps, {})(ProfileComponentContainer);
