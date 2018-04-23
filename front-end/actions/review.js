import {
  MARK_REVIEW_HELPFUL,
  UNMARK_REVIEW_HELPFUL,
  REVIEW_POST
} from './types';
import moment from 'moment';
import { DATETIME_FORMAT_FROM_BACKEND } from '../utils/index';

export const markReviewHelpful = reviewId => ({
  type: MARK_REVIEW_HELPFUL,
  payload: reviewId
});
export const unmarkReviewHelpful = reviewId => ({
  type: UNMARK_REVIEW_HELPFUL,
  payload: reviewId
});

// This one is fake, it's suppose to do the real API POSt to back-end
export const postReview = ({ content, rating, userId, userName }) => {
  const postedAt = moment().format(DATETIME_FORMAT_FROM_BACKEND);
  const numOfLikes = 0;
  const id = 100;
  return {
    type: REVIEW_POST,
    payload: {
      id,
      content,
      rating,
      numOfLikes,
      postedAt,
      user: { userId, name: userName }
    }
  };
};
