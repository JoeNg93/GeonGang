import {
  RECORD_POST,
  RECORDS_GET,
  CURRENT_RECORD_SET,
  RECORD_REMOVE
} from './types';
import { postData, queryGraphql, deleteData } from '../utils/api';

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
      overall_score: overallScore,
      recommended_text: recommendedText,
      tag,
      moisture,
      dirt,
      uv,
      pigmentation
    }
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

export const deleteRecord = recordId =>
  deleteData({
    actionType: RECORD_REMOVE,
    urlPath: `api/records/${recordId}`,
    successCallback: getRecords()
  });
