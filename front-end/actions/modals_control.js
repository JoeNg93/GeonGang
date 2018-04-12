import { RECORD_DETAIL_MODAL_CLOSE, RECORD_DETAIL_MODAL_OPEN } from './types';

export const openRecordDetailModal = () => ({ type: RECORD_DETAIL_MODAL_OPEN });

export const closeRecordDetailModal = () => ({
  type: RECORD_DETAIL_MODAL_CLOSE
});
