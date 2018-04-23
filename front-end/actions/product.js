import {
  CURRENT_PRODUCT_SET,
  FAVORITE_PRODUCT_ADD,
  FAVORITE_PRODUCT_REMOVE,
  RECOMMENDED_PRODUCTS_GET
} from './types';
import { postData, deleteData, getData } from '../utils/api';
import { getMyProfile } from './user_info';

export const setCurrentProduct = product => ({
  type: CURRENT_PRODUCT_SET,
  payload: product
});

export const addFavoriteProduct = productId =>
  postData({
    actionType: FAVORITE_PRODUCT_ADD,
    urlPath: 'api/favorite-product',
    data: { product_id: productId },
    successCallback: getMyProfile()
  });

export const removeFavoriteProduct = productId =>
  deleteData({
    actionType: FAVORITE_PRODUCT_REMOVE,
    urlPath: `api/favorite-product/${productId}`,
    successCallback: getMyProfile()
  });

export const getRecommendedProducts = ({ age, climate, skinType }) =>
  getData({
    actionType: RECOMMENDED_PRODUCTS_GET,
    urlPath: 'api/recommended-products',
    queryParams: { age, climate, skin_type: skinType }
  });
