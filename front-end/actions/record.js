import { RECORD_POST, RECORDS_GET, CURRENT_RECORD_SET } from './types';
import { postData, queryGraphql } from '../utils/api';

export const postRecord = ({
  overallScore,
  tag,
  moisture,
  dirt,
  uv,
  pigmentation,
  recommendedText
}) =>
  postData({
    actionType: RECORD_POST,
    urlPath: 'api/records',
    data: {
      overallScore,
      tag,
      moisture,
      dirt,
      uv,
      pigmentation,
      recommended_text: recommendedText
    },
    successCallback: getRecords()
  });

export const getRecords = () =>
  queryGraphql({
    actionType: RECORDS_GET,
    queryStr: `
      query {
        myRecords {
          id
          date
          overallScore
          tag
          moisture
          dirt
          uv
          pigmentation
          recommendedText
        }
      }
`
  });

export const setCurrentRecord = record => ({
  type: CURRENT_RECORD_SET,
  payload: record
});
