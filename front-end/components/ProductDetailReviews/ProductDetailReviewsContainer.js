import React, { Component } from 'react';
import ProductDetailReviews from './ProductDetailReviews';
import Comment from '../common/Comment';
import { TouchableOpacity, View } from 'react-native';
import colorCode from '../../utils/colorCode';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  closeProductDetailModal,
  closePostReviewSuccessModal
} from '../../actions/modals_control';
import {
  markReviewHelpful,
  postReview,
  unmarkReviewHelpful
} from '../../actions/review';
import OperationModal from '../common/OperationModal';
import moment from 'moment';
import _ from 'lodash';
import { DATETIME_FORMAT_FROM_BACKEND } from '../../utils/index';

class ProductDetailReviewsContainer extends Component {
  // Header styling
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    // Set "x" icon on the right
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() =>
          navigation.state.params &&
          navigation.state.params.closeProductDetailModal()}
      >
        <Icon
          name="clear"
          iconStyle={{ color: colorCode.darkBlue }}
          size={32}
        />
      </TouchableOpacity>
    ),
    // Set "<" icon on the left
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="keyboard-arrow-left"
          iconStyle={{ color: colorCode.darkBlue }}
          size={40}
        />
      </TouchableOpacity>
    )
  });

  state = {
    userProfileImgPath: require('../../assets/images/profile-1.jpg'),
    userRating: 0,
    userComment: ''
  };

  componentWillMount = () => {
    this.props.navigation.setParams({
      closeProductDetailModal: this.props.closeProductDetailModal
    });
  };

  onPressHelpful = reviewId => {
    const {
      helpfulReviews,
      markReviewHelpful,
      unmarkReviewHelpful
    } = this.props;

    if (helpfulReviews.includes(reviewId)) {
      // Already pressed helpful, attempt to unmark review as helpful
      unmarkReviewHelpful(reviewId);
    } else {
      markReviewHelpful(reviewId);
    }
  };

  onUserCommentSubmit = () => {
    const { userId, userName, postReview } = this.props;
    const { userRating, userComment } = this.state;
    postReview({ userId, userName, content: userComment, rating: userRating });
    // Clear text input
    this.setState({ userRating: 0, userComment: '' });
  };

  render() {
    const { currentProduct, helpfulReviews } = this.props;

    const commentComponents = _.orderBy(
      currentProduct.reviews,
      review => moment(review.postedAt, DATETIME_FORMAT_FROM_BACKEND),
      'desc'
    ).map((review, index) => (
      <Comment
        key={index}
        profileName={review.user.name}
        profileImgPath={require('../../assets/images/profile-1.jpg')}
        rating={review.rating}
        postDate={review.postedAt}
        text={review.content}
        helpfulCount={review.numOfLikes}
        liked={helpfulReviews.includes(review.id)}
        onPressHelpful={() => this.onPressHelpful(review.id)}
        onPressReport={() => {}}
      />
    ));
    return (
      <View style={{ flex: 1 }}>
        <ProductDetailReviews
          globalRating={currentProduct.rating}
          numberOfComments={currentProduct.reviews.length}
          state={this.state}
          onUserRating={userRating => this.setState({ userRating })}
          onUserCommentWriting={userComment => this.setState({ userComment })}
          onUserCommentSubmit={this.onUserCommentSubmit}
          commentComponents={commentComponents}
        />
        <OperationModal
          visible={this.props.postReviewSuccessModalVisible}
          content="Thanks for giving your review!"
          onPressCloseModal={this.props.closePostReviewSuccessModal}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentProduct: state.product.currentProduct,
  userId: state.userInfo.myProfile.userId,
  userName: state.userInfo.myProfile.name,
  helpfulReviews: state.review.helpfulReviews,
  postReviewSuccessModalVisible: state.modal.postReviewSuccessModalVisible
});

export default connect(mapStateToProps, {
  closeProductDetailModal,
  markReviewHelpful,
  postReview,
  unmarkReviewHelpful,
  closePostReviewSuccessModal
})(ProductDetailReviewsContainer);
