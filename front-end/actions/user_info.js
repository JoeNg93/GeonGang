import { MY_PROFILE_GET, OTHER_USER_PROFILE_GET } from './types';
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
            id
            content
            rating
            product {
              name
              imgSrc
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
                }
              }
            }
          }
          favoriteProducts {
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
              }
            }
          }
          friends {
            userId
            name
          }
        }
      }
  `
  });

export const getOtherUserProfile = userId =>
  queryGraphql({
    actionType: OTHER_USER_PROFILE_GET,
    queryStr: `
      query {
        user(id: ${userId}) {
          name
          gender
          age
          skinColor
          skinType
          climate
          skinCondition
          reviews {
            id
            content
            rating
            product {
              name
              imgSrc
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
                }
              }
            }
          }
          favoriteProducts {
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
              }
            }
          }
          friends {
            userId
            name
          }
        }
      }
  `
  });
