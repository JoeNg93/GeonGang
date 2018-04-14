import { MY_PROFILE_GET, SUCCESS, PENDING, FAIL } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  userInfo: {},
  isFetchingUserInfo: false
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case `${MY_PROFILE_GET}_${PENDING}`: {
      return { ...state, isFetchingUserInfo: true };
    }
    case `${MY_PROFILE_GET}_${SUCCESS}`: {
      let myProfile = {};
      if (payload.myProfile) {
        const {
          records,
          reviews,
          favoriteProducts,
          friends
        } = payload.myProfile;
        myProfile = {
          ...payload.myProfile,
          records: _.keyBy(records, 'id'),
          reviews: _.keyBy(reviews, 'id'),
          favoriteProducts: _.keyBy(favoriteProducts, 'id'),
          friends: _.keyBy(friends, 'userId')
        };
      }
      return {
        ...state,
        userInfo: myProfile,
        isFetchingUserInfo: false
      };
    }
    case `${MY_PROFILE_GET}_${FAIL}`: {
      return { ...state, isFetchingUserInfo: false };
    }
    default: {
      return state;
    }
  }
}
