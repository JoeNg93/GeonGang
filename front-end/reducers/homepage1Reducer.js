import { TAG_FILTER_SET } from '../actions/types';

const INITIAL_STATE = {
  tagFilter: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TAG_FILTER_SET: {
      return { ...state, tagFilter: payload };
    }
    default: {
      return state;
    }
  }
};
