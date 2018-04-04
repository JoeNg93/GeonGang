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

      {/* communityReview */}
      <Text style={styles.communityReviewTitle}>Review for this product</Text>
      <View style={styles.communityReviewBox}>
        <Text style={styles.communityReviewGrade}>4.4</Text>
        <View style={styles.communityReviewRating}>
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
          <Text style={styles.communityReviewRatingText}>
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

  communityReviewTitle: {
    
  },

  communityReviewBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 80
  },

  communityReviewGrade: {
    
  },

  communityReviewRating: {
    
  },

  communityReviewRatingText: {
    
  },

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

  profileImage: {
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
