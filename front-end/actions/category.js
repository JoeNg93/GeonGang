import { CATEGORIES_GET, CATEGORY_SET } from './types';
import { queryGraphql } from '../utils/api';

export const setCategory = category => ({
  type: CATEGORY_SET,
  payload: category
});

export const getCategories = () =>
  queryGraphql({
    actionType: CATEGORIES_GET,
    queryStr: `
      query {
        allCategories {
          id
          name
          products {
            id
            name
            price
            rating
            numOfReviews
            ingredients
            imgSrc
            category {
              name
            }
            brand {
              name
            }
            reviews {
              id
              content
              rating
              numOfLikes
              postedAt
              user {
                name
                userId
              }
            }
          }
        }
      }
`
  });
