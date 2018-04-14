import { RECORD_POST } from './types';
import { postData } from '../utils/api';

export const postRecord = ({
  overallScore,
  tag,
  moisture,
  dirt,
  uv,
  pigmentation
}) =>
  postData({
    actionType: RECORD_POST,
    urlPath: 'api/record',
    data: { overallScore, tag, moisture, dirt, uv, pigmentation }
  });
