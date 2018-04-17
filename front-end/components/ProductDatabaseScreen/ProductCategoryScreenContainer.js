import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import { categoryColor } from '../../utils/index';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setCategory } from '../../actions/category';

class ProductCategoryScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Category list',
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    tabBarLabel: 'Products',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="bag" type="simple-line-icon" color={tintColor} />
    ),
    // Set "<" icon on the left
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="keyboard-arrow-left"
          iconStyle={{ color: colorCode.darkBlue }}
          size={40}
        />
      </TouchableOpacity>
    )
  });

  onPressCategory = categoryId => {
    this.props.setCategory(this.props.categories[categoryId]);
    this.props.navigation.goBack();
  };

  render() {
    const { categories } = this.props;
    if (_.isEmpty(this.props.categories)) {
      return null;
    }

    const categoryListComponents = _.map(categories, (category, categoryId) => (
      <ListItem
        avatar={
          <View
            style={[
              styles.categoryColorBox,
              { backgroundColor: categoryColor[category.name] }
            ]}
          />
        }
        key={categoryId}
        title={category.name}
        titleStyle={styles.title}
        chevronColor={'#C7C7CC'}
        containerStyle={styles.listItem}
        component={TouchableOpacity}
        onPress={() => this.onPressCategory(categoryId)}
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

const mapStateToProps = state => ({
  categories: state.category.categories
});

export default connect(mapStateToProps, { setCategory })(
  ProductCategoryScreenContainer
);
