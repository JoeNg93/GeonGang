import React, { Component } from 'react';
import ProductDatabaseScreen from './ProductDatabaseScreen';
import Product from '../common/Product';
import { Icon } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import { connect } from 'react-redux';
import { getCategories, setCategory } from '../../actions/category';
import _ from 'lodash';

class ProductDatabaseScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Product list',
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    tabBarLabel: 'Products',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="bag" type="simple-line-icon" color={tintColor} />
    )
  });

  state = {
    currentActive: 0,
    selectedIndex: 0,
    currentCategory: 'Moisturizers'
  };
  productEntries = [
    {
      productName: 'Neutrogena Hydro Boost Water Gel',
      productImgPath: require('../../assets/images/product-1.jpg'),
      category: { name: 'Moisturizers', color: '#4396DC' },
      addedState: true,
      rating: 3.4
    },
    {
      productName: 'Clinique Turnaround Revitalizing Lotion',
      productImgPath: require('../../assets/images/product-2.jpg'),
      category: { name: 'Skincare (face)', color: '#4CD964' },
      addedState: false,
      rating: 4.4
    },
    {
      productName: 'Garnier SkinActive Micellar Cleansing Water',
      productImgPath: require('../../assets/images/product-3.jpg'),
      category: { name: 'Cleansers', color: '#345995' },
      addedState: false,
      rating: 4.0
    }
  ];

  buttons = ['All items', 'High rated', 'Most reviewed'];

  componentWillMount = async () => {
    await this.props.getCategories();
    this.props.setCategory(Object.values(this.props.categories)[0]);
  };

  productAddHandle = index => {
    this.setState({ currentActive: index });
    this.productEntries[index].addedState = !this.productEntries[index]
      .addedState;
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  categoryHandle = () => {
    this.props.navigation.navigate('productCategory');
  };
  recordSearchInput = text => {};
  productSearchHandle = () => {};

  render() {
    if (_.isEmpty(this.props.currentCategory)) {
      return null;
    }

    const productComponents = this.props.currentCategory.products.map(
      (productInfo, index) => (
        <Product
          key={index}
          productName={productInfo.name}
          productImgPath={productInfo.imgSrc}
          category={productInfo.category}
          rating={productInfo.rating}
          addedState={false}
          productAddHandle={this.productAddHandle.bind(this, index)}
        />
      )
    );
    return (
      <ProductDatabaseScreen
        productComponents={productComponents}
        buttons={this.buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
        currentCategory={this.props.currentCategory}
        categoryHandle={this.categoryHandle}
        recordSearchInput={this.recordSearchInput}
        productSearchHandle={this.productSearchHandle}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  currentCategory: state.category.currentCategory
});

export default connect(mapStateToProps, { getCategories, setCategory })(
  ProductDatabaseScreenContainer
);
