import React, { Component } from 'react';
import ReviewsComponent from './ReviewsComponent';
import { connect } from 'react-redux';
import _ from 'lodash';

class ReviewsComponentContainer extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
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

    const { reviews } = userProfile;

    return (
      <ReviewsComponent
        numOfReviews={reviews.length}
        list={reviews}
        modalVisible={this.state.modalVisible}
        setModalVisible={this.setModalVisible}
      />
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.userInfo.myProfile,
  otherUserProfile: state.userInfo.otherUserProfile,
  otherUserProfileModalVisible: state.modal.otherUserProfileModalVisible
});

export default connect(mapStateToProps, {})(ReviewsComponentContainer);
