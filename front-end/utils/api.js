import { SUCCESS, PENDING, FAIL } from '../actions/types';
import { getAuthHeader } from './auth';
import axios from 'axios';
import envConfig from './env_config';

export const getData = ({ actionType, urlPath }) => async dispatch => {
  dispatch({ type: `${actionType}_${PENDING}` });
  try {
    const response = await axios.get(`${envConfig.baseUrl}/${urlPath}`, {
      headers: await getAuthHeader()
    });
    dispatch({ type: `${actionType}_${SUCCESS}`, payload: response.data.data });
    return response;
  } catch (err) {
    dispatch({ type: `${actionType}_${FAIL}`, payload: err.response.data });
    return err.response;
  }
};

export const postData = ({
  actionType,
  urlPath,
  data,
  successCallback
}) => async dispatch => {
  dispatch({ type: `${actionType}_${PENDING}` });
  try {
    const response = await axios.post(`${envConfig.baseUrl}/${urlPath}`, data, {
      headers: await getAuthHeader()
    });
    dispatch({ type: `${actionType}_${SUCCESS}`, payload: response.data.data });
    if (typeof successCallback === 'function') {
      successCallback(dispatch);
    }
    return response;
  } catch (err) {
    dispatch({ type: `${actionType}_${FAIL}`, payload: err.response.data });
    return err.response;
  }
};

export const queryGraphql = ({ actionType, queryStr }) =>
  postData({ actionType, urlPath: 'api/graphql', data: { query: queryStr } });
