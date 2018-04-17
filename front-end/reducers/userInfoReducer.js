import {
  MY_PROFILE_GET,
  OTHER_USER_PROFILE_GET,
  SUCCESS,
  PENDING,
  FAIL
} from '../actions/types';

const INITIAL_STATE = {
  otherUserProfile: {},
  isFetchingOtherUserProfile: false,
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
    case `${OTHER_USER_PROFILE_GET}_${PENDING}`: {
      return { ...state, isFetchingOtherUserProfile: true };
    }
    case `${OTHER_USER_PROFILE_GET}_${SUCCESS}`: {
      return {
        ...state,
        otherUserProfile: payload.user || {},
        isFetchingOtherUserProfile: false
      };
    }
    case `${OTHER_USER_PROFILE_GET}_${FAIL}`: {
      return { ...state, isFetchingOtherUserProfile: false };
    }
    default: {
      return state;
    }
  }
}
