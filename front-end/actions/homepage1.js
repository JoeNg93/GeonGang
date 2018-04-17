import { TAG_FILTER_SET } from './types';

export const setTagFilter = tagFilter => ({
  type: TAG_FILTER_SET,
  payload: tagFilter
});
