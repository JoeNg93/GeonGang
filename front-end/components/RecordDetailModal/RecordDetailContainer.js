import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import RecordDetailModal from './RecordDetailModal';
import Product from '../common/Product';

class RecordDetailContainer extends Component {
  state = { currentActiveProduct: 0 };
  date = '18. March 2018';
  gradientBackground = colorCode.moderateGradient;
  overallScore = {
    score: 67.8,
    scoreTag: 'moderate',
    scoreTagColor: colorCode.moderateTag,
    lightVersion: true,
    displayRow: true
  };
  skinConditionResult = {
    moistureScore: 45,
    dirtScore: 62,
    uvScore: 88,
    pigmentScore: 20,
    recommendText:
      'Your skin is thisty, tired with lots of dirts and oil. We recommend cleaning your face and moisturizing before go to bed.'
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

  productAddHandle = index => {
    this.setState({ currentActiveProduct: index });
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
    return (
      <RecordDetailModal
        date={this.date}
        gradientBackground={this.gradientBackground}
        score={this.overallScore.score}
        scoreTag={this.overallScore.scoreTag}
        scoreTagColor={this.overallScore.scoreTagColor}
        lightVersion={this.overallScore.lightVersion}
        displayRow={this.overallScore.displayRow}
        moistureScore={this.skinConditionResult.moistureScore}
        dirtScore={this.skinConditionResult.dirtScore}
        uvScore={this.skinConditionResult.uvScore}
        pigmentScore={this.skinConditionResult.pigmentScore}
        recommendText={this.skinConditionResult.recommendText}
        productComponents={productComponents}
      />
    );
  }
}

export default RecordDetailContainer;
