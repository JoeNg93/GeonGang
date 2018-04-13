import { combineReducers } from 'redux';
import userInputReducer from './userInputReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import userInfoReducer from './userInfoReducer';

export default combineReducers({
  userInput: userInputReducer,
  auth: authReducer,
  modal: modalReducer,
  userInfo: userInfoReducer
});
