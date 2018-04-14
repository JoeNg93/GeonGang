import {
  RECORDS_GET,
  CURRENT_RECORD_SET,
  SUCCESS,
  PENDING,
  FAIL
} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  myRecords: {},
  isFetchingMyRecord: false,
  currentRecord: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${RECORDS_GET}_${PENDING}`: {
      return { ...state, isFetchingMyRecord: true };
    }
    case `${RECORDS_GET}_${SUCCESS}`: {
      return {
        ...state,
        isFetchingMyRecord: false,
        myRecords: _.keyBy(payload.myRecords, 'id')
      };
    }
    case `${RECORDS_GET}_${FAIL}`: {
      return { ...state, isFetchingMyRecord: false };
    }
    case CURRENT_RECORD_SET: {
      return { ...state, currentRecord: payload };
    }
    default: {
      return state;
    }
  }
};
