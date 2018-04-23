import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import { Icon, Button, Rating } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import { categoryColor } from '../../utils/index';

const hitSlop = { top: 20, bottom: 20, left: 20, right: 20 };

const ProductDetail = ({
  addedState,
  product,
  topReview,
  onPressAddProduct,
  onPressReview
}) => {
  return (
    <ScrollView style={styles.container}>
      {/* productImage */}
      <Image source={{ uri: product.imgSrc }} style={styles.productImage} />

      {/* productOverview */}
      <View style={styles.placeholder}>
        <View style={styles.productOverviewContainer}>
          <View style={styles.productOverviewText}>
            <Text
              style={[
                { fontSize: 22, marginBottom: 9 },
                commonStyles.fontMontserratMedium,
                commonStyles.colorDarkBlue
              ]}
            >
              {product.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: categoryColor[product.category.name],
                  borderRadius: 50,
                  paddingHorizontal: 15,
                  paddingVertical: 1
                }}
              >
                <Text
                  style={[
                    { color: 'white', fontSize: 16 },
                    commonStyles.fontMontserratLight
                  ]}
                >
                  {product.category.name}
                </Text>
              </View>
            </View>
          </View>

          {addedState === false ? (
            <TouchableOpacity
              onPress={() => onPressAddProduct(product.id)}
              hitSlop={hitSlop}
              style={styles.productOverviewBtnAdd}
            >
              <View>
                <Icon
                  name="add"
                  color={colorCode.blue}
                  size={30}
                  containerStyle={{
                    margin: 0,
                    width: 42,
                    height: 42,
                    borderColor: colorCode.blue,
                    borderWidth: 1,
                    borderRadius: 200
                  }}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => onPressAddProduct(product.id)}
              hitSlop={hitSlop}
              style={styles.productOverviewBtnAdd}
            >
              <View>
                <Icon
                  reverse
                  name="add"
                  size={30}
                  containerStyle={{
                    margin: 0,
                    width: 42,
                    height: 42,
                    backgroundColor: colorCode.blue
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.productOverviewRating}>
          <Rating
            type="star"
            readonly
            ratingCount={5}
            fractions={1}
            startingValue={product.rating}
            imageSize={20}
            style={{ paddingVertical: 20 }}
          />
          <Text
            style={[
              { fontSize: 16, marginLeft: 16 },
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            {product.rating.toFixed(1)} of 5
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
          {product.ingredients}
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
          <Text style={commonStyles.fontMontserratMedium}>
            {product.reviews.length}
          </Text>
          {' Reviews'}
        </Text>
        <Text
          style={[
            styles.productReviewPrice,
            styles.productReviewTitleText,
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue
          ]}
        >
          {'Price: '}
          <Text style={commonStyles.fontMontserratMedium}>{product.price}</Text>
        </Text>
      </View>

      <TouchableHighlight
        underlayColor="#eaeaea"
        activeOpacity={1}
        onPress={onPressReview}
        style={[styles.productTopReview, styles.placeholder]}
      >
        {topReview ? (
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/profile-1.jpg')}
              style={styles.profileImage}
            />
            <Text
              style={[
                styles.productTopReviewText,
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue
              ]}
            >
              {topReview.content.substr(0, 120) + '...'}
            </Text>
            <Icon
              name="keyboard-arrow-right"
              size={38}
              color={colorCode.darkBlue}
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={[
                styles.productTopReviewText,
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue,
                { textAlign: 'center', fontSize: 13 }
              ]}
            >
              No reviews yet. Press here to write your own review
            </Text>
          </View>
        )}
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorCode.white
  },

  placeholder: {
    paddingHorizontal: 36
  },

  // Components

  productImage: {
    resizeMode: 'contain',
    height: 180,
    width: undefined,
    marginVertical: 30
  },

  productOverviewContainer: {
    flexDirection: 'row'
  },

  productOverviewText: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column'
  },

  productOverviewBtnAdd: {
    justifyContent: 'center'
  },

  productOverviewRating: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  productIngredients: {
    flexDirection: 'column'
  },

  productIngredientsTitle: {
    fontSize: 16,
    marginBottom: 8
  },

  productIngredientsContents: {
    fontSize: 14,
    marginBottom: 16
  },

  productReviewTitle: {
    flexDirection: 'row'
  },

  productReviewTitleText: {
    fontSize: 16
  },

  productReviewCount: {
    textAlign: 'left',
    flexGrow: 1
  },

  productReviewPrice: {
    textAlign: 'right',
    flexGrow: 1
  },

  productTopReview: {
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  productTopReviewText: {
    width: 216,
    fontSize: 11,
    marginLeft: 16,
    marginRight: 16
  },

  profileImage: {
    resizeMode: 'contain',
    borderRadius: 28,
    height: 56,
    width: 56,
    alignSelf: 'center'
  },

  popupBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6);'
  },

  popupContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '80%',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 13,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.25
  },

  popupImage: {
    resizeMode: 'contain',
    height: 53
  },

  popupText: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 60,
    marginVertical: 24
  },

  popupBtnGreat: {
    backgroundColor: '#4396DC',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 6
  }
});

export default ProductDetail;
