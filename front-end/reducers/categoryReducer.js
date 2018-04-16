import {
  CATEGORIES_GET,
  CATEGORY_SET,
  PENDING,
  SUCCESS,
  FAIL
} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  categories: {},
  isFetchingCategories: false,
  currentCategory: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${CATEGORIES_GET}_${PENDING}`: {
      return { ...state, isFetchingCategories: true };
    }
    case `${CATEGORIES_GET}_${SUCCESS}`: {
      return {
        ...state,
        isFetchingCategories: false,
        categories: _.keyBy(payload.allCategories, 'id')
      };
    }
    case `${CATEGORIES_GET}_${FAIL}`: {
      return { ...state, isFetchingCategories: false };
    }
    case CATEGORY_SET: {
      return { ...state, currentCategory: payload };
    }
    default: {
      return state;
    }
  }
};
