import {
  SIGNIN_SUCCESS,
  SIGNIN_PENDING,
  SIGNIN_FAIL,
  EMAIL_SET,
  PASSWORD_SET
} from './types';
import envConfig from '../utils/env_config';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const setEmail = email => ({ type: EMAIL_SET, payload: email });
export const setPassword = password => ({
  type: PASSWORD_SET,
  payload: password
});

export const signIn = ({ email, password }) => async dispatch => {
  dispatch({ type: SIGNIN_PENDING });
  try {
    const response = await axios.post(`${envConfig.baseUrl}/auth/signin`, {
      email,
      password
    });
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data.data });
    await AsyncStorage.setItem('authToken', response.data.data.token);
    return response;
  } catch (err) {
    dispatch({ type: SIGNIN_FAIL, payload: err.response.data });
    return err.response;
  }
};
