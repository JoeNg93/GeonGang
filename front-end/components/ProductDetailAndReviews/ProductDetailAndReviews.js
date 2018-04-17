import { StackNavigator } from 'react-navigation';
import ProductDetailContainer from '../ProductDetail/ProductDetailContainer';
import ProductDetailReviewContainer from '../ProductDetailReviews/ProductDetailReviewsContainer';

const ProductDetailAndReviews = StackNavigator({
  productDetail: { screen: ProductDetailContainer },
  productReviews: { screen: ProductDetailReviewContainer }
});

export default ProductDetailAndReviews;
