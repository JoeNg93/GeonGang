import { MARK_REVIEW_HELPFUL, UNMARK_REVIEW_HELPFUL } from '../actions/types';

const INITIAL_STATE = {
  helpfulReviews: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MARK_REVIEW_HELPFUL: {
      return { ...state, helpfulReviews: state.helpfulReviews.concat(payload) };
    }
    case UNMARK_REVIEW_HELPFUL: {
      return {
        ...state,
        helpfulReviews: state.helpfulReviews.filter(id => id !== payload)
      };
    }
    default: {
      return state;
    }
  }
};
