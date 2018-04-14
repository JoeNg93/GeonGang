import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';
import { connect } from 'react-redux';
import _ from 'lodash';

class ProfileComponentContainer extends Component {
  render() {
    const { userInfo } = this.props;
    if (_.isEmpty(userInfo)) {
      return null;
    }

    const {
      age,
      gender,
      skinColor,
      skinType,
      climate,
      skinCondition
    } = userInfo;

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
  userInfo: state.userInfo.userInfo
});

export default connect(mapStateToProps, {})(ProfileComponentContainer);
