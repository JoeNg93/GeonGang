import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { Icon, Button, Rating, Divider } from "react-native-elements";
import PropTypes from "prop-types";
import commonStyles from "../../utils/styles";
import colorCode from "../../utils/colorCode";
import Comment from "../common/Comment";

const ProductDetailReviews = ({
  globalRating,
  numberOfComments,
  state,
  onUserRating,
  onUserCommentWriting,
  onUserCommentSubmit,
  commentComponents
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} bounces={false}>
        {/* globalReview */}
        <Text
          style={[
            styles.globalReviewTitle,
            styles.placeholder,
            commonStyles.fontMontserratMedium,
            commonStyles.colorDarkBlue
          ]}
        >
          Review for this product
        </Text>
        <View style={[styles.globalReviewBox, styles.placeholder]}>
          <Text
            style={[
              styles.globalReviewGrade,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            {globalRating.toFixed(1)}
          </Text>
          <View style={styles.globalReviewRating}>
            <Rating
              type="star"
              readonly
              ratingCount={5}
              fractions={1}
              startingValue={globalRating}
              imageSize={20}
              style={{ marginBottom: 10 }}
            />
            <Text
              style={[
                styles.globalReviewRatingText,
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue
              ]}
            >
              Based on {numberOfComments} reviews and ratings
            </Text>
          </View>
        </View>

        {/* userReview */}
        <View style={[styles.userReview, styles.placeholder]}>
          <Image
            source={state.userProfileImgPath}
            style={styles.userProfileImage}
          />
          <View style={styles.userReviewInput}>
            <Rating
              type="star"
              ratingCount={5}
              fractions={1}
              startingValue={state.userRating}
              imageSize={20}
              onFinishRating={onUserRating}
              style={{ marginBottom: 10 }}
            />
            <View style={styles.userReviewTextbox}>
              <TextInput
                placeholder="Write your review here..."
                multiline={true}
                color={colorCode.gray}
                style={[{ fontSize: 12 }, commonStyles.fontMontserratLight]}
                value={state.userComment}
                onChangeText={onUserCommentWriting}
              />
            </View>
            <Button
              containerViewStyle={styles.btnSubmitCont}
              textStyle={[
                commonStyles.fontMontserratSemiBold,
                { fontSize: 14, color: "#ffffff" }
              ]}
              title="Write review"
              buttonStyle={styles.btnSubmit}
              onPress={onUserCommentSubmit}
            />
          </View>
        </View>

        {/* Comments */}
        <View>{commentComponents}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  placeholder: {
    paddingHorizontal: 36
  },

  // Components

  globalReviewTitle: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 16
  },

  globalReviewBox: {
    flexDirection: "row",
    alignItems: "center"
  },

  globalReviewGrade: {
    fontSize: 46
  },

  globalReviewRating: {
    flexDirection: "column",
    marginLeft: 14
  },

  globalReviewRatingText: {
    fontSize: 13
  },

  userProfileImage: {
    resizeMode: "contain",
    borderRadius: 34,
    height: 65,
    width: 65
  },

  userReview: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 24
  },

  userReviewInput: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 16
  },

  userReviewTextbox: {
    borderRadius: 6,
    borderColor: colorCode.lightGray,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 65,
    marginBottom: 16
  },

  btnSubmitCont: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0
  },

  btnSubmit: {
    backgroundColor: "#4396DC",
    borderRadius: 25,
    alignSelf: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 6
  }
});

ProductDetailReviews.propTypes = {
  globalRating: PropTypes.number,
  numberOfComments: PropTypes.number
};

ProductDetailReviews.defaultProps = {
  globalRating: 0,
  numberOfComments: 0
};

export default ProductDetailReviews;
