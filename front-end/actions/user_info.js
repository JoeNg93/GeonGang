import { MY_PROFILE_GET } from './types';
import { queryGraphql } from '../utils/api';

export const getMyProfile = () =>
  queryGraphql({
    actionType: MY_PROFILE_GET,
    queryStr: `
      query {
        myProfile {
          name
          gender
          age
          skinColor
          skinType
          climate
          skinCondition
          reviews {
            content
          }
          favoriteProducts {
            name
          }
        }
      }
  `
  });
