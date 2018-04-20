import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import colorCode from '../../utils/colorCode';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  closeProductDetailModal,
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
} from '../../actions/modals_control';
import _ from 'lodash';
import {
  addFavoriteProduct,
  removeFavoriteProduct
} from '../../actions/product';
import OperationModal from '../common/OperationModal';

class ProductDetailContainer extends Component {
  // Header styling
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    // Set "x" icon on the right
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() =>
          navigation.state.params &&
          navigation.state.params.closeProductDetailModal()}
      >
        <Icon
          name="clear"
          iconStyle={{ color: colorCode.darkBlue }}
          size={32}
        />
      </TouchableOpacity>
    )
  });

  componentWillMount = () => {
    this.props.navigation.setParams({
      closeProductDetailModal: this.props.closeProductDetailModal
    });
  };

  onPressAddProduct = productId => {
    if (this.props.idOfFavoriteProducts.includes(productId)) {
      // Already added, remove it from favorite
      this.props.removeFavoriteProduct(productId);
      return;
    }
    this.props.addFavoriteProduct(productId);
  };

  render() {
    const { currentProduct, idOfFavoriteProducts } = this.props;
    if (_.isEmpty(currentProduct)) {
      return null;
    }

    const topReview = _.maxBy(currentProduct.reviews, 'numOfLikes');

    return (
      <View style={{ flex: 1 }}>
        <ProductDetail
          addedState={idOfFavoriteProducts.includes(currentProduct.id)}
          product={currentProduct}
          topReview={topReview}
          onPressAddProduct={this.onPressAddProduct}
          onPressReview={() => this.props.navigation.navigate('productReviews')}
          onPressPopupBtn={() => {
            this.setPopupVisible(false);
          }}
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
  currentProduct: state.product.currentProduct,
  idOfFavoriteProducts: _.map(state.userInfo.myProfile.favoriteProducts, 'id'),
  addFavoriteProductSuccessModalVisible:
    state.modal.addFavoriteProductSuccessModalVisible,
  removeFavoriteProductSuccessModalVisible:
    state.modal.removeFavoriteProductSuccessModalVisible
});

export default connect(mapStateToProps, {
  closeProductDetailModal,
  addFavoriteProduct,
  removeFavoriteProduct,
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
})(ProductDetailContainer);
