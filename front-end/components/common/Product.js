import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';
import { categoryColor } from '../../utils/index';

const hitSlop = { top: 20, bottom: 20, left: 20, right: 20 };

const Product = ({
  productName,
  productImgPath,
  category,
  rating,
  addedState,
  productAddHandle
}) => {
  return (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: productImgPath }}
        style={styles.productImg}
        resizeMode="cover"
      />
      <View style={styles.infoCol}>
        <Text
          style={[
            commonStyles.fontMontserratRegular,
            commonStyles.colorDarkBlue,
            { fontSize: 14 }
          ]}
        >
          {productName}
        </Text>
        <View
          style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}
        >
          <Badge
            value={category.name}
            containerStyle={{ backgroundColor: categoryColor[category.name] }}
            textStyle={[
              { fontSize: 12, color: 'white' },
              commonStyles.fontMontserratRegular
            ]}
          />
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Icon name="star" color="#F2C94C" iconStyle={{ marginRight: 5 }} />
            <Text
              style={[
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue,
                { fontSize: 14 }
              ]}
            >
              {rating}
            </Text>
          </View>
        </View>
      </View>
      {addedState === false ? (
        <TouchableOpacity onPress={productAddHandle} hitSlop={hitSlop}>
          <View>
            <Icon
              name="add"
              color="#4396DC"
              size={30}
              containerStyle={{
                margin: 0,
                width: 36,
                height: 36,
                borderColor: colorCode.blue,
                borderWidth: 1,
                borderRadius: 200
              }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={productAddHandle} hitSlop={hitSlop}>
          <View>
            <Icon
              reverse
              name="add"
              size={30}
              containerStyle={{
                margin: 0,
                width: 36,
                height: 36,
                backgroundColor: colorCode.blue
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 28,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 110,
    shadowColor: '#8C8C8C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  productImg: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    flex: 3
  },
  infoCol: {
    flex: 7,
    paddingLeft: 11,
    paddingRight: 15
  }
});

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productImgPath: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  addedState: PropTypes.bool,
  productAddHandle: PropTypes.func.isRequired
};

Product.defaultProps = {
  addedState: false
};

export default Product;
