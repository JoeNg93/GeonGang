import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import RecordDetailModal from './RecordDetailModal';
import Product from '../common/Product';
import { connect } from 'react-redux';
import { closeRecordDetailModal } from '../../actions/modals_control';
import _ from 'lodash';
import moment from 'moment';
import { DATETIME_FORMAT_FROM_BACKEND } from '../../utils/index';

class RecordDetailContainer extends Component {
  state = { currentActiveProduct: 0 };
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
    const { currentRecord } = this.props;
    if (_.isEmpty(currentRecord)) {
      return null;
    }

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

    const gradientBackground = colorCode[`${currentRecord.tag}Gradient`];
    const date = moment(
      currentRecord.date,
      DATETIME_FORMAT_FROM_BACKEND
    ).format('DD MMM YYYY');

    return (
      <RecordDetailModal
        date={date}
        gradientBackground={gradientBackground}
        score={currentRecord.overallScore}
        scoreTag={currentRecord.tag}
        scoreTagColor={colorCode[`${currentRecord.tag}Tag`]}
        lightVersion={true}
        displayRow={true}
        moistureScore={currentRecord.moisture}
        dirtScore={currentRecord.dirt}
        uvScore={currentRecord.uv}
        pigmentScore={currentRecord.pigmentation}
        recommendText={currentRecord.recommendedText}
        productComponents={productComponents}
        onPressCloseModal={this.props.closeRecordDetailModal}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentRecord: state.record.currentRecord
});

export default connect(mapStateToProps, { closeRecordDetailModal })(
  RecordDetailContainer
);
