import React, { Component } from 'react';
import ProductDatabaseScreen from './ProductDatabaseScreen';
import Product from '../common/Product';

class ProductDatabaseScreenContainer extends Component {
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

  productAddHandle = index => {
    this.setState({ currentActive: index });
    this.productEntries[index].addedState = !this.productEntries[index]
      .addedState;
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  categoryHandle = () => {};
  recordSearchInput = text => {};
  productSearchHandle = () => {};

  render() {
    productComponents = this.productEntries.map((productInfo, index) => (
      <Product
        key={index}
        productName={productInfo.productName}
        productImgPath={productInfo.productImgPath}
        category={productInfo.category}
        rating={productInfo.rating}
        addedState={productInfo.addedState}
        productAddHandle={this.productAddHandle.bind(this, index)}
      />
    ));
    return (
      <ProductDatabaseScreen
        productComponents={productComponents}
        buttons={this.buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
        currentCategory={this.state.currentCategory}
        categoryHandle={this.categoryHandle}
        recordSearchInput={this.recordSearchInput}
        productSearchHandle={this.productSearchHandle}
      />
    );
  }
}

export default ProductDatabaseScreenContainer;
