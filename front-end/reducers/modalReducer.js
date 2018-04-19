import {
  RECORD_DETAIL_MODAL_CLOSE,
  RECORD_DETAIL_MODAL_OPEN,
  PRODUCT_DETAIL_MODAL_CLOSE,
  PRODUCT_DETAIL_MODAL_OPEN,
  OTHER_USER_PROFILE_MODAL_CLOSE,
  OTHER_USER_PROFILE_MODAL_OPEN,
  SUCCESS,
  FAVORITE_PRODUCT_ADD,
  FAVORITE_PRODUCT_REMOVE,
  ADD_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE,
  REMOVE_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE
} from '../actions/types';

const INITIAL_STATE = {
  recordDetailModalVisible: false,
  productDetailModalVisible: false,
  otherUserProfileModalVisible: false,
  addFavoriteProductSuccessModalVisible: false,
  removeFavoriteProductSuccessModalVisible: false
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
    case OTHER_USER_PROFILE_MODAL_OPEN: {
      return { ...state, otherUserProfileModalVisible: true };
    }
    case OTHER_USER_PROFILE_MODAL_CLOSE: {
      return { ...state, otherUserProfileModalVisible: false };
    }
    case `${FAVORITE_PRODUCT_ADD}_${SUCCESS}`: {
      return { ...state, addFavoriteProductSuccessModalVisible: true };
    }
    case ADD_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE: {
      return { ...state, addFavoriteProductSuccessModalVisible: false };
    }
    case `${FAVORITE_PRODUCT_REMOVE}_${SUCCESS}`: {
      return { ...state, removeFavoriteProductSuccessModalVisible: true };
    }
    case REMOVE_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE: {
      return { ...state, removeFavoriteProductSuccessModalVisible: false };
    }
    default: {
      return state;
    }
  }
}
