import {
  RECORD_DETAIL_MODAL_CLOSE,
  RECORD_DETAIL_MODAL_OPEN,
  PRODUCT_DETAIL_MODAL_CLOSE,
  PRODUCT_DETAIL_MODAL_OPEN,
  OTHER_USER_PROFILE_MODAL_CLOSE,
  OTHER_USER_PROFILE_MODAL_OPEN
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
