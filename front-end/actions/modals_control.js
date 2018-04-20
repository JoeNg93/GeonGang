import {
  RECORD_DETAIL_MODAL_CLOSE,
  RECORD_DETAIL_MODAL_OPEN,
  PRODUCT_DETAIL_MODAL_CLOSE,
  PRODUCT_DETAIL_MODAL_OPEN,
  OTHER_USER_PROFILE_MODAL_CLOSE,
  OTHER_USER_PROFILE_MODAL_OPEN,
  ADD_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE,
  REMOVE_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE,
  POST_REVIEW_SUCCESS_MODAL_CLOSE
} from './types';

export const openRecordDetailModal = () => ({ type: RECORD_DETAIL_MODAL_OPEN });

export const closeRecordDetailModal = () => ({
  type: RECORD_DETAIL_MODAL_CLOSE
});

export const openProductDetailModal = () => ({
  type: PRODUCT_DETAIL_MODAL_OPEN
});
export const closeProductDetailModal = () => ({
  type: PRODUCT_DETAIL_MODAL_CLOSE
});

export const openOtherUserProfileModal = () => ({
  type: OTHER_USER_PROFILE_MODAL_OPEN
});
export const closeOtherUserProfileModal = () => ({
  type: OTHER_USER_PROFILE_MODAL_CLOSE
});

export const closeAddFavoriteProductModalSuccess = () => ({
  type: ADD_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE
});
export const closeRemoveFavoriteProductModalSuccess = () => ({
  type: REMOVE_FAVORITE_PRODUCT_SUCCESS_MODAL_CLOSE
});

export const closePostReviewSuccessModal = () => ({
  type: POST_REVIEW_SUCCESS_MODAL_CLOSE
});
