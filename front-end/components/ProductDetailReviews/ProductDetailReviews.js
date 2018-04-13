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

const ProductDetailReviews = ({ commentComponents }) => {
  return (
    <View style={styles.container}>
      {/* Section header */}
      <View style={styles.header} />

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
            4.4
          </Text>
          <View style={styles.globalReviewRating}>
            <Rating
              type="star"
              readonly
              ratingCount={5}
              fractions={1}
              startingValue={4.4}
              imageSize={20}
              // onFinishRating={this.ratingCompleted}
              style={{ marginBottom: 10 }}
            />
            <Text
              style={[
                styles.globalReviewRatingText,
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue
              ]}
            >
              Based on 18 reviews and ratings
            </Text>
          </View>
        </View>

        {/* userReview */}
        <View style={[styles.userReview, styles.placeholder]}>
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
              style={{ marginBottom: 10 }}
            />
            <View style={styles.userReviewTextbox}>
              <TextInput
                placeholder="Write your review here..."
                multiline={true}
                color={colorCode.gray}
                style={[{ fontSize: 12 }, commonStyles.fontMontserratLight]}
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
            />
          </View>
        </View>

        {/* communityReviews */}
        {/* <Divider
          style={{
            backgroundColor: "#DFDFDF",
            height: 1,
            marginHorizontal: 36
          }}
        /> */}

        <View>{commentComponents}</View>

        {/* <Comment /> */}
        {/* <View style={[styles.communityReview, styles.placeholder]}>
          <Image
            source={require("../../assets/images/profile-1.jpg")}
            style={styles.communityReviewImage}
          />
          <View style={styles.communityReviewContents}>
            <View style={styles.communityReviewTitle}>
              <Text
                style={[
                  styles.communityReviewTitleName,
                  commonStyles.fontMontserratMedium,
                  commonStyles.colorDarkBlue
                ]}
              >
                Emma Watson
              </Text>
              <Text
                style={[
                  styles.communityReviewTitleDate,
                  commonStyles.fontMontserratLight,
                  commonStyles.colorGray
                ]}
              >
                1 month ago
              </Text>
            </View>
            <Rating
              type="star"
              readonly
              ratingCount={5}
              fractions={1}
              startingValue={4.4}
              imageSize={16}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingTop: 6, paddingBottom: 16 }}
            />
            <Text
              style={[
                styles.communityReviewComment,
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue
              ]}
            >
              The texture is very nice and it non sticky, non greasy. Very
              hydrating and ultras a few for my sensitive skin, I can even apply
              it around the eye area. It's a must have and 1st part of my
              skincare routine and after I apply my Mineral 89, I apply my other
              serums and It compliments every serum and moisturiser I apply, may
              it be day or night.
            </Text>
            <View style={styles.communityReviewBottom}>
              <Button
                containerViewStyle={styles.communityReviewBottomBtnCont}
                buttonStyle={styles.communityReviewBottomBtn}
                color={colorCode.red}
                icon={{ name: "favorite-border", color: colorCode.red }}
                title="Helpful (3)"
                textStyle={styles.communityReviewBottomBtnTxt}
              />
              <Button
                containerViewStyle={styles.communityReviewBottomBtnCont}
                buttonStyle={styles.communityReviewBottomBtn}
                color={colorCode.lightGray}
                icon={{ name: "warning", color: colorCode.lightGray }}
                title="Report"
                textStyle={styles.communityReviewBottomBtnTxt}
              />
            </View>
          </View>
        </View> */}
      </ScrollView>
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
    // flex: 1,
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

  // communityReview: {
  //   backgroundColor: "#eaeaea",
  //   flexDirection: "row",
  //   paddingTop: 20,
  //   paddingBottom: 5
  // },

  // communityReviewImage: {
  //   resizeMode: "contain",
  //   borderRadius: 28,
  //   height: 56,
  //   width: 56
  // },

  // communityReviewContents: {
  //   flex: 1,
  //   flexDirection: "column",
  //   marginLeft: 12
  // },

  // communityReviewTitle: {
  //   flexDirection: "row",
  //   alignItems: "baseline"
  // },

  // communityReviewTitleName: {
  //   flexGrow: 1,
  //   textAlign: "left",
  //   fontSize: 14
  // },

  // communityReviewTitleDate: {
  //   flexGrow: 1,
  //   textAlign: "right",
  //   fontSize: 12
  // },

  // communityReviewComment: {
  //   fontSize: 12
  // },

  // communityReviewBottom: {
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  //   alignItems: "baseline"
  // },

  // communityReviewBottomBtnCont: {
  //   marginTop: 8,
  //   marginRight: 0,
  //   marginBottom: 8,
  //   marginLeft: 8
  // },

  // communityReviewBottomBtn: {
  //   backgroundColor: "transparent",
  //   paddingVertical: 8,
  //   paddingHorizontal: 10
  // },

  // communityReviewBottomBtnTxt: {
  //   fontSize: 12
  // }
});

ProductDetailReviews.propTypes = {
  userProfileImgPath: PropTypes.number
};

ProductDetailReviews.defaultProps = {
  userProfileImgPath: require("../../assets/images/unknown-gender.png")
};

export default ProductDetailReviews;
