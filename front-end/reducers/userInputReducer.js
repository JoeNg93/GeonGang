import {
  AGE_SET,
  CLIMATE_SET,
  GENDER_SET,
  SKIN_COLOR_SET,
  SKIN_TYPE_SET
} from '../actions/types';

const INITIAL_STATE = {
  age: 0,
  gender: 'unknown',
  skinColor: 'Medium',
  skinType: 'normal',
  climate: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AGE_SET: {
      return { ...state, age: payload };
    }
    case GENDER_SET: {
      return { ...state, gender: payload };
    }
    case SKIN_COLOR_SET: {
      return { ...state, skinColor: payload };
    }
    case SKIN_TYPE_SET: {
      return { ...state, skinType: payload };
    }
    case CLIMATE_SET: {
      return { ...state, climate: payload };
    }
    default:
      return state;
  }
};
