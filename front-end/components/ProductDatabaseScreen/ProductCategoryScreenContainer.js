import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';

class ProductCategoryScreenContainer extends Component {
  categoryList = [
    {
      name: 'Moisturizers',
      color: '#4396DC'
    },
    {
      name: 'Cleansers',
      color: '#0C3363'
    },
    {
      name: 'Toners',
      color: '#F48D79'
    },
    {
      name: 'Masks',
      color: '#531EC6'
    },
    {
      name: 'Scrubs',
      color: '#FF2D55'
    },
    {
      name: 'Makeup removal',
      color: '#FF9500'
    },
    {
      name: 'Treatment (Face)',
      color: '#4CD964'
    },
    {
      name: 'Treatment (Eye)',
      color: '#9B51E0'
    },
    {
      name: 'Neckcream',
      color: '#FF3B30'
    }
  ];
  render() {
    categoryListComponents = this.categoryList.map((item, i) => (
      <ListItem
        avatar={
          <View
            style={[styles.categoryColorBox, { backgroundColor: item.color }]}
          />
        }
        key={i}
        title={item.name}
        titleStyle={styles.title}
        chevronColor={'#C7C7CC'}
        containerStyle={styles.listItem}
      />
    ));
    return (
      <List containerStyle={styles.listContainer}>
        {categoryListComponents}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 50,
    borderColor: colorCode.extremeLightGray
  },
  listItem: {
    borderBottomColor: colorCode.extremeLightGray,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12
  },
  categoryColorBox: {
    width: 30,
    height: 30,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
    color: colorCode.darkBlue,
    fontFamily: 'montserrat-light',
    marginLeft: 16
  }
});

export default ProductCategoryScreenContainer;
