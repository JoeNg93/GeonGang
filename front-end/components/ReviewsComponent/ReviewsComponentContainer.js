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
    const { userInfo } = this.props;

    if (_.isEmpty(userInfo)) {
      return null;
    }

    const { reviews } = userInfo;

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
  userInfo: state.userInfo.userInfo
});

export default connect(mapStateToProps, {})(ReviewsComponentContainer);
