import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import colorCode from '../../utils/colorCode';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeProductDetailModal } from '../../actions/modals_control';
import _ from 'lodash';

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

  state = {
    addedState: false,
    popupVisible: false
  };

  product = {
    name: 'Vichy Mineral 89',
    imgPath: require('../../assets/images/product-4.jpg'),
    type: 'Moisturizers',
    rating: 4,
    ingredients:
      'aqua / water / eau • peg/ppg/polybutylene glycol-8/5/3 glycerin • glycerin • butylene glycol • methyl gluceth-20 • carbomer • sodium hyaluronate • phenoxyethanol • caprylyl glycol • citric acid • biosaccharide gum-1',
    numberOfReviews: 18,
    price: '$$$'
  };

  topReview = {
    reviewerImgPath: require('../../assets/images/profile-1.jpg'),
    comment:
      'The texture is very nice and it non sticky, non greasy. Very hydrating and ultras a few for my sensitive skin, I can even apply it around the eye area...'
  };

  componentWillMount = () => {
    this.props.navigation.setParams({
      closeProductDetailModal: this.props.closeProductDetailModal
    });
  };

  productAddHandle = () => {
    this.setState(previousState => {
      return { addedState: !previousState.addedState };
    });
    if (this.state.addedState === false) {
      this.setPopupVisible(true);
    }
  };

  setPopupVisible = visible => {
    this.setState({ popupVisible: visible });
  };

  render() {
    const { currentProduct } = this.props;
    if (_.isEmpty(currentProduct)) {
      return null;
    }

    const topReview = _.maxBy(currentProduct.reviews, 'numOfLikes');

    return (
      <ProductDetail
        state={this.state}
        product={currentProduct}
        topReview={this.topReview}
        onPressAddProduct={this.productAddHandle}
        onPressReview={() => this.props.navigation.navigate('productReviews')}
        onPressPopupBtn={() => {
          this.setPopupVisible(false);
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentProduct: state.product.currentProduct
});

export default connect(mapStateToProps, { closeProductDetailModal })(
  ProductDetailContainer
);
