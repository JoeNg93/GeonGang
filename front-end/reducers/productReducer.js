import {
  CURRENT_PRODUCT_SET,
  FAVORITE_PRODUCT_ADD,
  FAVORITE_PRODUCT_REMOVE,
  SUCCESS,
  FAIL,
  PENDING,
  REVIEW_POST,
  MARK_REVIEW_HELPFUL,
  UNMARK_REVIEW_HELPFUL,
  RECOMMENDED_PRODUCTS_GET
} from '../actions/types';

const INITIAL_STATE = {
  currentProduct: {},
  isAddingFavoriteProduct: false,
  isRemovingFavoriteProduct: false,
  currentRecommendedProducts: [],
  isFetchingCurrentRecommendedProducts: false
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
    case REVIEW_POST: {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          rating:
            (state.currentProduct.rating + payload.rating) /
            (state.currentProduct.reviews.length + 1),
          reviews: state.currentProduct.reviews.concat(payload)
        }
      };
    }
    case MARK_REVIEW_HELPFUL: {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          reviews: state.currentProduct.reviews.map(
            review =>
              review.id === payload
                ? { ...review, numOfLikes: review.numOfLikes + 1 }
                : review
          )
        }
      };
    }
    case UNMARK_REVIEW_HELPFUL: {
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          reviews: state.currentProduct.reviews.map(
            review =>
              review.id === payload
                ? { ...review, numOfLikes: review.numOfLikes - 1 }
                : review
          )
        }
      };
    }
    case `${RECOMMENDED_PRODUCTS_GET}_${PENDING}`: {
      return { ...state, isFetchingCurrentRecommendedProducts: true };
    }
    case `${RECOMMENDED_PRODUCTS_GET}_${FAIL}`: {
      return { ...state, isFetchingCurrentRecommendedProducts: false };
    }
    case `${RECOMMENDED_PRODUCTS_GET}_${SUCCESS}`: {
      return {
        ...state,
        currentRecommendedProducts: payload.recommendedProducts,
        isFetchingCurrentRecommendedProducts: false
      };
    }
    default: {
      return state;
    }
  }
};
