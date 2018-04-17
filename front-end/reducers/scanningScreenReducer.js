import { START_SCANNING_ANIMATION } from '../actions/types';

const INITIAL_STATE = {
  startScanningAnimation: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case START_SCANNING_ANIMATION: {
      return { ...state, startScanningAnimation: true };
    }
    default: {
      return state;
    }
  }
};
