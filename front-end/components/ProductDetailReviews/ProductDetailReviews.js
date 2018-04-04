import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Icon, Button, Rating } from "react-native-elements";
import commonStyles from "../../utils/styles";
import PropTypes from "prop-types";

const ProductDetailReviews = ({ productName }) => {
  return (
    <View style={styles.container}>
      {/* Section header */}
      <View style={styles.header} />

      {/* globalReview */}
      <Text style={styles.globalReviewTitle}>Review for this product</Text>
      <View style={styles.globalReviewBox}>
        <Text style={styles.globalReviewGrade}>4.4</Text>
        <View style={styles.globalReviewRating}>
          <Rating
            type="star"
            readonly
            ratingCount={5}
            fractions={1}
            startingValue={4.4}
            imageSize={20}
            // onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Text style={styles.globalReviewRatingText}>
            Based on 18 reviews and ratings
          </Text>
        </View>
      </View>

      {/* userReview */}
      <View style={styles.userReview}>
        <Image
          source={require("../../assets/images/profile-1.jpg")}
          style={styles.userProfileImage}
        />
        <View style={styles.userReviewInput}>
          <Rating
            type="star"
            ratingCount={5}
            fractions={1}
            startingValue={0}
            imageSize={20}
            // onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <TextInput placeholder="Write your review here..." multiline={true} />

          <Button title="Write review" buttonStyle={styles.btnSubmit} />
        </View>
      </View>

      {/* communityReviews */}
      <View style={styles.communityReview}>
        <Image
          source={require("../../assets/images/profile-1.jpg")}
          style={styles.communityReviewImage}
        />
        <View style={styles.communityReviewContents}>
          <View style={styles.communityReviewTitle}>
            <Text style={styles.communityReviewTitleName}>Emma Watson</Text>
            <Text style={styles.communityReviewTitleDate}>1 month ago</Text>
          </View>
          <Rating
            type="star"
            readonly
            ratingCount={5}
            fractions={1}
            startingValue={4.4}
            imageSize={15}
            // onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Text style={styles.communityReviewComment}>
            The texture is very nice and it non sticky, non greasy. Very
            hydrating and ultras a few for my sensitive skin, I can even apply
            it around the eye area. It's a must have and 1st part of my skincare
            routine and after I apply my Mineral 89, I apply my other serums and
            It compliments every serum and moisturiser I apply, may it be day or
            night.
          </Text>
          <View style={styles.communityReviewBottom}>
            <Button icon={{ name: "favorite-border" }} title="Helpful" />
            <Button icon={{ name: "warning" }} title="Report" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  header: {
    backgroundColor: "#dadada",
    height: 70
  },

  globalReviewTitle: {},

  globalReviewBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 80
  },

  globalReviewGrade: {},

  globalReviewRating: {},

  globalReviewRatingText: {},

  userProfileImage: {
    resizeMode: "contain",
    borderRadius: 34,
    height: 68,
    width: 68
  },

  userReview: {
    flex: 1,
    flexDirection: "row"
  },

  userReviewInput: {
    flex: 1,
    flexDirection: "column"
  },

  btnSubmit: {
    backgroundColor: "#4396DC",
    borderRadius: 20,
    alignSelf: "flex-end"
  },

  communityReviewImage: {
    resizeMode: "contain",
    borderRadius: 28,
    height: 56,
    width: 56
  }
});

ProductDetailReviews.propTypes = {
  productName: PropTypes.string.isRequired
};

ProductDetailReviews.defaultProps = {
  productName: 0
};

export default ProductDetailReviews;
