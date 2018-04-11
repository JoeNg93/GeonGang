import {
  CLIMATE_SET,
  GENDER_SET,
  SKIN_COLOR_SET,
  SKIN_TYPE_SET,
  AGE_SET,
  USER_INPUTS_POST_PENDING,
  USER_INPUTS_POST_FAIL,
  USER_INPUTS_POST_SUCCESS
} from './types';
import axios from 'axios';
import envConfig from '../utils/env_config';
import { getAuthHeader } from '../utils/auth';

export const setAge = age => ({ type: AGE_SET, payload: age });

export const setGender = gender => ({ type: GENDER_SET, payload: gender });

export const setSkinColor = skinColor => ({
  type: SKIN_COLOR_SET,
  payload: skinColor
});

export const setSkinType = skinType => ({
  type: SKIN_TYPE_SET,
  payload: skinType
});

export const setClimate = climate => ({ type: CLIMATE_SET, payload: climate });

export const postUserInputs = ({
  name,
  age,
  gender,
  skinColor,
  skinType,
  climate
}) => async dispatch => {
  dispatch({ type: USER_INPUTS_POST_PENDING });
  try {
    const response = await axios.post(
      `${envConfig.baseUrl}/api/user-info`,
      {
        name,
        age,
        gender,
        climate,
        skin_color: skinColor,
        skin_type: skinType
      },
      { headers: await getAuthHeader() }
    );
    dispatch({ type: USER_INPUTS_POST_SUCCESS, payload: response.data.data });
    return response;
  } catch (err) {
    dispatch({ type: USER_INPUTS_POST_FAIL, payload: err.response.data });
    return err.response;
  }
};
