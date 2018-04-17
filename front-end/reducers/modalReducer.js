import {
  RECORD_DETAIL_MODAL_CLOSE,
  RECORD_DETAIL_MODAL_OPEN,
  PRODUCT_DETAIL_MODAL_CLOSE,
  PRODUCT_DETAIL_MODAL_OPEN
} from '../actions/types';

const INITIAL_STATE = {
  recordDetailModalVisible: false,
  productDetailModalVisible: false
};

export default function(state = INITIAL_STATE, { type }) {
  switch (type) {
    case RECORD_DETAIL_MODAL_OPEN: {
      return { ...state, recordDetailModalVisible: true };
    }
    case RECORD_DETAIL_MODAL_CLOSE: {
      return { ...state, recordDetailModalVisible: false };
    }
    case PRODUCT_DETAIL_MODAL_OPEN: {
      return { ...state, productDetailModalVisible: true };
    }
    case PRODUCT_DETAIL_MODAL_CLOSE: {
      return { ...state, productDetailModalVisible: false };
    }
    default: {
      return state;
    }
  }
}
