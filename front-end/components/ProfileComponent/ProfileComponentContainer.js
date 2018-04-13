import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';
import { connect } from 'react-redux';
import _ from 'lodash';

class ProfileComponentContainer extends Component {
  render() {
    const { myProfile } = this.props;
    if (_.isEmpty(myProfile)) {
      return null;
    }

    const {
      age,
      gender,
      skinColor,
      skinType,
      climate,
      skinCondition
    } = myProfile;

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
  myProfile: state.userInfo.myProfile
});

export default connect(mapStateToProps, {})(ProfileComponentContainer);
