import { CURRENT_PRODUCT_SET } from './types';

export const setCurrentProduct = product => ({
  type: CURRENT_PRODUCT_SET,
  payload: product
});
