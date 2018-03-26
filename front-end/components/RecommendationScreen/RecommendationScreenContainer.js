import React, { Component } from 'react';
import RecommendationScreen from './RecommendationScreen';
import Product from '../common/Product';

class RecommendationScreenContainer extends Component {
  state = { currentActive: 0 };
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

  productAddHandle = index => {
    this.setState({ currentActive: index });
    this.productEntries[index].addedState = !this.productEntries[index]
      .addedState;
  };

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
    return <RecommendationScreen productComponents={productComponents} />;
  }
}

export default RecommendationScreenContainer;
