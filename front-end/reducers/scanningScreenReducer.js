import {
  START_SCANNING_ANIMATION,
  STOP_SCANNING_ANIMATION
} from '../actions/types';

const INITIAL_STATE = {
  startScanningAnimation: false
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case START_SCANNING_ANIMATION: {
      return { ...state, startScanningAnimation: true };
    }
    case STOP_SCANNING_ANIMATION: {
      return { ...state, startScanningAnimation: false };
    }
    default: {
      return state;
    }
  }
};
