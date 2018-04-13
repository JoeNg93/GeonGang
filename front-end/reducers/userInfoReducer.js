import { MY_PROFILE_GET, SUCCESS, PENDING, FAIL } from '../actions/types';

const INITIAL_STATE = {
  myProfile: {},
  isFetchingMyProfile: false
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case `${MY_PROFILE_GET}_${PENDING}`: {
      return { ...state, isFetchingMyProfile: true };
    }
    case `${MY_PROFILE_GET}_${SUCCESS}`: {
      return {
        ...state,
        myProfile: payload.myProfile || {},
        isFetchingMyProfile: false
      };
    }
    case `${MY_PROFILE_GET}_${FAIL}`: {
      return { ...state, isFetchingMyProfile: false };
    }
    default: {
      return state;
    }
  }
}
