import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon, ButtonGroup, SearchBar } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import Product from '../common/Product';
import PropTypes from 'prop-types';

const ProductDatabaseScreen = ({
  productComponents,
  buttons,
  selectedIndex,
  updateIndex,
  currentCategory,
  categoryHandle,
  recordSearchInput,
  productSearchHandle
}) => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        round
        icon={{
          name: 'search',
          color: colorCode.blue,
          style: styles.searchIcon
        }}
        placeholder="product name, brands,.."
        containerStyle={styles.searchBarContainer}
        inputStyle={[commonStyles.fontMontserratLight, styles.searchInput]}
        placeholderTextColor={colorCode.anotherLightGray}
        onChangeText={recordSearchInput}
        onSubmitEditing={productSearchHandle}
        clearIcon={{ color: colorCode.anotherLightGray, name: 'clear' }}
      />
      <TouchableOpacity onpress={categoryHandle}>
        <View style={styles.categoryButtonContainer}>
          <Text style={[commonStyles.fontMontserratLight, styles.categoryText]}>
            Category: {currentCategory.name}
          </Text>
          <Icon name="chevron-right" color="#fff" size={32} />
        </View>
      </TouchableOpacity>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.buttonGroupButtons}
        selectedButtonStyle={styles.selectedButton}
        textStyle={[styles.buttonGroupText, commonStyles.fontMontserratLight]}
        selectedTextStyle={styles.selectedButtonText}
        innerBorderStyle={{ width: -1, color: 'transparent' }}
      />
      <View style={styles.productSection}>{productComponents}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colorCode.white
  },
  productSection: {
    flex: 1,
    alignSelf: 'stretch'
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 16
  },
  searchIcon: {
    fontSize: 24,
    top: 11,
    left: 20
  },
  searchInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colorCode.blue,
    color: colorCode.blue,
    margin: 0,
    width: '100%',
    height: 46,
    borderRadius: 100,
    paddingLeft: 50,
    fontSize: 16
  },
  categoryButtonContainer: {
    width: '100%',
    backgroundColor: colorCode.blue,
    borderRadius: 200,
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 8,
    height: 46
  },
  categoryText: {
    fontSize: 16,
    color: '#fff'
  },
  buttonGroupContainer: {
    width: '100%',
    marginTop: 25,
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginRight: 0
  },
  buttonGroupButtons: {
    borderBottomWidth: 0
  },
  selectedButton: {
    borderBottomColor: colorCode.darkBlue,
    borderBottomWidth: 2
  },
  buttonGroupText: {
    color: colorCode.anotherLightGray,
    fontSize: 14
  },
  selectedButtonText: {
    color: colorCode.darkBlue
  }
});

Product.propTypes = {
  productComponents: PropTypes.array,
  buttons: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateIndex: PropTypes.func,
  currentCategory: PropTypes.string,
  categoryHandle: PropTypes.func,
  recordSearchInput: PropTypes.func,
  productSearchHandle: PropTypes.func
};

export default ProductDatabaseScreen;
