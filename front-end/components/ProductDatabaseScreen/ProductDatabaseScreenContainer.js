import React, { Component } from 'react';
import ProductDatabaseScreen from './ProductDatabaseScreen';
import Product from '../common/Product';
import { Icon } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import { connect } from 'react-redux';
import { getCategories, setCategory } from '../../actions/category';
import {
  setCurrentProduct,
  addFavoriteProduct,
  removeFavoriteProduct
} from '../../actions/product';
import {
  openProductDetailModal,
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
} from '../../actions/modals_control';
import _ from 'lodash';
import LoaderContainer from '../common/LoaderContainer';
import OperationModal from '../common/OperationModal';
import { View } from 'react-native';

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
    currentCategory: 'Moisturizers',
    productSearchTerm: ''
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
    this.props.setCategory(Object.values(this.props.categories)[4]);
  };

  productAddHandle = productId => {
    if (this.props.idOfFavoriteProducts.includes(productId)) {
      // Already added, remove it from favorite
      this.props.removeFavoriteProduct(productId);
      return;
    }
    this.props.addFavoriteProduct(productId);
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  categoryHandle = () => {
    this.props.navigation.navigate('productCategory');
  };

  recordSearchInput = text => {
    this.setState({ productSearchTerm: text });
  };

  productSearchHandle = () => {};

  onPressSetCurrentProduct = async productInfo => {
    await this.props.setCurrentProduct(productInfo);
    this.props.openProductDetailModal();
  };

  render() {
    const {
      currentCategory,
      isFetchingCategories,
      idOfFavoriteProducts
    } = this.props;

    if (_.isEmpty(currentCategory) || isFetchingCategories) {
      return <LoaderContainer />;
    }

    let { products } = this.props.currentCategory;
    // Filter according to search term
    if (this.state.productSearchTerm) {
      products = products.filter(
        product =>
          product.name
            .toLowerCase()
            .indexOf(this.state.productSearchTerm.toLowerCase()) !== -1 ||
          product.brand.name
            .toLowerCase()
            .indexOf(this.state.productSearchTerm.toLowerCase()) !== -1
      );
    }
    const productComponents = products.map(productInfo => (
      <Product
        key={productInfo.id}
        productName={`${productInfo.brand.name} ${productInfo.name}`}
        productImgPath={productInfo.imgSrc}
        category={productInfo.category}
        rating={productInfo.rating}
        addedState={idOfFavoriteProducts.includes(productInfo.id)}
        productAddHandle={() => this.productAddHandle(productInfo.id)}
        onPressProduct={() => this.onPressSetCurrentProduct(productInfo)}
      />
    ));
    return (
      <View style={{ flex: 1 }}>
        <ProductDatabaseScreen
          productComponents={productComponents}
          buttons={this.buttons}
          selectedIndex={this.state.selectedIndex}
          updateIndex={this.updateIndex}
          currentCategory={this.props.currentCategory}
          categoryHandle={this.categoryHandle}
          recordSearchInput={this.recordSearchInput}
          productSearchHandle={this.productSearchHandle}
          productDetailModalVisible={this.props.productDetailModalVisible}
          isAddingFavoriteProduct={this.props.isAddingFavoriteProduct}
          isRemovingFavoriteProduct={this.props.isRemovingFavoriteProduct}
        />
        <OperationModal
          visible={this.props.addFavoriteProductSuccessModalVisible}
          content="Product is added to your favorite list!"
          onPressCloseModal={this.props.closeAddFavoriteProductModalSuccess}
        />
        <OperationModal
          visible={this.props.removeFavoriteProductSuccessModalVisible}
          content="Product is removed from your favorite list!"
          onPressCloseModal={this.props.closeRemoveFavoriteProductModalSuccess}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  isFetchingCategories: state.category.isFetchingCategories,
  idOfFavoriteProducts: _.map(state.userInfo.myProfile.favoriteProducts, 'id'),
  isAddingFavoriteProduct: state.product.isAddingFavoriteProduct,
  isRemovingFavoriteProduct: state.product.isRemovingFavoriteProduct,
  currentCategory: state.category.currentCategory,
  productDetailModalVisible: state.modal.productDetailModalVisible,
  addFavoriteProductSuccessModalVisible:
    state.modal.addFavoriteProductSuccessModalVisible,
  removeFavoriteProductSuccessModalVisible:
    state.modal.removeFavoriteProductSuccessModalVisible
});

export default connect(mapStateToProps, {
  getCategories,
  setCategory,
  setCurrentProduct,
  openProductDetailModal,
  addFavoriteProduct,
  removeFavoriteProduct,
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
})(ProductDatabaseScreenContainer);
