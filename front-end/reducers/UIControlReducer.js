import {
  TAG_FILTER_SET,
  START_SCANNING_ANIMATION,
  STOP_SCANNING_ANIMATION
} from '../actions/types';

const INITIAL_STATE = {
  homepage1Screen: {
    tagFilter: ''
  },
  scanningScreen: {
    startScanningAnimation: false
  }
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TAG_FILTER_SET: {
      return {
        ...state,
        homepage1Screen: { ...state.homepage1Screen, tagFilter: payload }
      };
    }
    case START_SCANNING_ANIMATION: {
      return {
        ...state,
        scanningScreen: {
          ...state.scanningScreen,
          startScanningAnimation: true
        }
      };
    }
    case STOP_SCANNING_ANIMATION: {
      return {
        ...state,
        scanningScreen: {
          ...state.scanningScreen,
          startScanningAnimation: false
        }
      };
    }
    default: {
      return state;
    }
  }
}
