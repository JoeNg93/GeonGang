import {
  CURRENT_PRODUCT_SET,
  FAVORITE_PRODUCT_ADD,
  FAVORITE_PRODUCT_REMOVE
} from './types';
import { postData, deleteData } from '../utils/api';
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
