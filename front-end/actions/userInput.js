import {
  CLIMATE_SET,
  GENDER_SET,
  SKIN_COLOR_SET,
  SKIN_TYPE_SET,
  AGE_SET
} from './types';

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
