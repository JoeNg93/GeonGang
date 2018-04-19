import {
  CURRENT_PRODUCT_SET,
  FAVORITE_PRODUCT_ADD,
    FAVORITE_PRODUCT_REMOVE
  SUCCESS,
  FAIL,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  currentProduct: {},
  isAddingFavoriteProduct: false,
  isRemovingFavoriteProduct: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CURRENT_PRODUCT_SET: {
      return { ...state, currentProduct: payload };
    }
    case `${FAVORITE_PRODUCT_ADD}_${PENDING}`: {
      return { ...state, isAddingFavoriteProduct: true };
    }
    case `${FAVORITE_PRODUCT_ADD}_${SUCCESS}`:
    case `${FAVORITE_PRODUCT_ADD}_${FAIL}`: {
      return { ...state, isAddingFavoriteProduct: false };
    }
    case `${FAVORITE_PRODUCT_REMOVE}_${PENDING}`: {
      return { ...state, isRemovingFavoriteProduct: true };
    }
    case `${FAVORITE_PRODUCT_REMOVE}_${SUCCESS}`:
    case `${FAVORITE_PRODUCT_REMOVE}_${FAIL}`: {
      return { ...state, isRemovingFavoriteProduct: false };
    }
    default: {
      return state;
    }
  }
};
