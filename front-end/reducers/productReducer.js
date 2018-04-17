import { CURRENT_PRODUCT_SET } from '../actions/types';

const INITIAL_STATE = {
  currentProduct: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CURRENT_PRODUCT_SET: {
      return { ...state, currentProduct: payload };
    }
    default: {
      return state;
    }
  }
};
