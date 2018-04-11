import {
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  PASSWORD_SET,
  EMAIL_SET
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMAIL_SET: {
      return { ...state, email: payload };
    }
    case PASSWORD_SET: {
      return { ...state, password: payload };
    }
    default:
      return state;
  }
};
