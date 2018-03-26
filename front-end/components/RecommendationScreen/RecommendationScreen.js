import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../common/Header';
import Product from '../common/Product';
import PropTypes from 'prop-types';

const RecommendationScreen = ({ productComponents }) => {
  return (
    <View style={styles.container}>
      <Header
        headerText={'Our recommendation'}
        descriptionText={
          'This is our product recommendation based on your skin conditions and your profile input. Add them to your list !'
        }
      />
      <View style={styles.productSection}>{productComponents}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  productSection: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    alignSelf: 'stretch'
  }
});

Product.propTypes = {
  productComponents: PropTypes.array
};

export default RecommendationScreen;
