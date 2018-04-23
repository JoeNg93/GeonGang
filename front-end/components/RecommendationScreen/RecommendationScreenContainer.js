import React, { Component } from 'react';
import RecommendationScreen from './RecommendationScreen';
import Product from '../common/Product';
import { connect } from 'react-redux';
import {
  addFavoriteProduct,
  removeFavoriteProduct
} from '../../actions/product';
import _ from 'lodash';
import { View, ScrollView } from 'react-native';
import OperationModal from '../common/OperationModal';
import {
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
} from '../../actions/modals_control';
import LoaderContainer from '../common/LoaderContainer';

class RecommendationScreenContainer extends Component {
  categoryNameIDMap = {
    2: { name: 'Toners' },
    5: { name: 'Cleansers' },
    6: { name: 'Sunscreen' },
    7: { name: 'Moisturizers' }
  };

  productAddHandle = productId => {
    const {
      idOfFavoriteProducts,
      addFavoriteProduct,
      removeFavoriteProduct
    } = this.props;
    if (idOfFavoriteProducts.includes(productId)) {
      // Already added, attemp to remove add
      removeFavoriteProduct(productId);
      return;
    }
    addFavoriteProduct(productId);
  };

  render() {
    const {
      idOfFavoriteProducts,
      currentRecommendedProducts,
      isFetchingCurrentRecommendedProducts
    } = this.props;

    if (isFetchingCurrentRecommendedProducts) {
      return <LoaderContainer />;
    }

    const productComponents = currentRecommendedProducts.map(
      (productInfo, index) => (
        <Product
          key={productInfo.id}
          productName={productInfo.name}
          productImgPath={productInfo.imgSrc}
          category={this.categoryNameIDMap[productInfo.categoryId]}
          rating={productInfo.rating}
          addedState={idOfFavoriteProducts.includes(productInfo.id)}
          productAddHandle={() => this.productAddHandle(productInfo.id)}
        />
      )
    );
    return (
      <ScrollView style={{ flex: 1 }}>
        <RecommendationScreen productComponents={productComponents} />
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  idOfFavoriteProducts: _.map(state.userInfo.myProfile.favoriteProducts, 'id'),
  addFavoriteProductSuccessModalVisible:
    state.modal.addFavoriteProductSuccessModalVisible,
  removeFavoriteProductSuccessModalVisible:
    state.modal.removeFavoriteProductSuccessModalVisible,
  currentRecommendedProducts: state.product.currentRecommendedProducts,
  isFetchingCurrentRecommendedProducts:
    state.product.isFetchingCurrentRecommendedProducts
});

export default connect(mapStateToProps, {
  addFavoriteProduct,
  removeFavoriteProduct,
  closeAddFavoriteProductModalSuccess,
  closeRemoveFavoriteProductModalSuccess
})(RecommendationScreenContainer);
