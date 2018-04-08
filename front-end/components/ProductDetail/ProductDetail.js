import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import { Icon, Button, Rating } from "react-native-elements";
import PropTypes from "prop-types";

import commonStyles from "../../utils/styles";
import colorCode from "../../utils/colorCode";

const ProductDetail = ({ productName }) => {
  onPress = () => {};

  return (
    <View style={styles.container}>
      {/* Section header */}
      <View style={styles.header} />

      {/* productImage */}
      <Image
        source={require("../../assets/images/product-4.jpg")}
        style={styles.productImage}
      />

      {/* productOverview */}
      <View style={[styles.productOverview, styles.placeholder]}>
        <View style={styles.productOverviewContainer}>
          <View style={styles.productOverviewText}>
            <Text
              style={[
                { fontSize: 22 },
                commonStyles.fontMontserratMedium,
                commonStyles.colorDarkBlue
              ]}
            >
              Vichy Mineral 89
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: colorCode.blue,
                  borderRadius: 50
                }}
              >
                <Text
                  style={[
                    { color: "white", fontSize: 16 },
                    commonStyles.fontMontserratLight
                  ]}
                >
                  Moisturizers
                </Text>
              </View>
            </View>
          </View>
          <TouchableHighlight
            underlayColor="#eaeaea"
            activeOpacity={1}
            onPress={this.onPress}
            style={styles.productOverviewBtnAdd}
          >
            <Icon
              // style={styles.productOverviewBtnAdd}
              name="add-circle-outline"
            />
          </TouchableHighlight>
        </View>
        <View style={styles.productOverviewRating}>
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
          <Text
            style={[
              { fontSize: 16 },
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            4.4 of 5
          </Text>
        </View>
      </View>

      {/* productIngredients */}
      <View style={[styles.productIngredients, styles.placeholder]}>
        <Text
          style={[
            styles.productIngredientsTitle,
            commonStyles.fontMontserratMedium,
            commonStyles.colorDarkBlue
          ]}
        >
          Ingredients
        </Text>
        <Text
          style={[
            styles.productIngredientsContents,
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue
          ]}
        >
          AQUA / WATER / EAU • PEG/PPG/POLYBUTYLENE GLYCOL-8/5/3 GLYCERIN •
          GLYCERIN • BUTYLENE GLYCOL • METHYL GLUCETH-20 • CARBOMER • SODIUM
          HYALURONATE • PHENOXYETHANOL • CAPRYLYL GLYCOL • CITRIC ACID •
          BIOSACCHARIDE GUM-1
        </Text>
      </View>

      {/* productReview */}
      <View style={[styles.productReviewTitle, styles.placeholder]}>
        <Text
          style={[
            styles.productReviewCount,
            styles.productReviewTitleText,
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue
          ]}
        >
          <Text style={commonStyles.fontMontserratMedium}>18</Text> reviews
        </Text>
        <Text
          style={[
            styles.productReviewPrice,
            styles.productReviewTitleText,
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue
          ]}
        >
          Price: <Text style={commonStyles.fontMontserratMedium}>$$$</Text>
        </Text>
      </View>

      <TouchableHighlight
        underlayColor="#eaeaea"
        activeOpacity={1}
        onPress={this.onPress}
        style={[styles.productTopReview, styles.placeholder]}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/images/profile-1.jpg")}
            style={styles.profileImage}
          />
          <Text
            style={[
              styles.productTopReviewText,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            The texture is very nice and it non sticky, non greasy. Very
            hydrating and ultras a few for my sensitive skin, I can even apply
            it around the eye area...
          </Text>
          <Icon name="keyboard-arrow-right" />
        </View>
      </TouchableHighlight>
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

  header: {
    backgroundColor: "#dadada",
    height: 70
  },

  // Components

  productImage: {
    resizeMode: "contain",
    height: 180,
    width: undefined
  },

  productOverview: {
    // maxHeight: 70
  },

  productOverviewContainer: {
    // flex: 1,
    flexDirection: "row"
  },

  productOverviewText: {
    // flex: 1,
    flexGrow: 1,
    flexDirection: "column"
  },

  productOverviewBtnAdd: {
    // flex: 2,
    justifyContent: "center",
    backgroundColor: "#a0a0a0"
  },

  productOverviewRating: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  productIngredients: {
    // flex: 1,
    flexDirection: "column"
  },

  // TODO: Style + color
  productIngredientsTitle: {
    fontSize: 16
  },

  // TODO: Style + color
  productIngredientsContents: {
    fontSize: 12
  },

  productReviewTitle: {
    // flex: 1,
    flexDirection: "row"
  },

  productReviewTitleText: {
    fontSize: 16
  },

  productReviewCount: {
    textAlign: "left",
    flexGrow: 1
  },

  prodcutReviewPrice: {
    textAlign: "right",
    flexGrow: 1
  },

  productTopReview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  productTopReviewText: {
    // flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    fontSize: 12
  },

  profileImage: {
    resizeMode: "contain",
    borderRadius: 28,
    height: 56,
    width: 56
  }
});

ProductDetail.propTypes = {
  productName: PropTypes.string.isRequired
};

ProductDetail.defaultProps = {
  productName: 0
};

export default ProductDetail;
