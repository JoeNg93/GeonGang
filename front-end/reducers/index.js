import { combineReducers } from 'redux';
import userInputReducer from './userInputReducer';
import authReducer from './authReducer';

export default combineReducers({
  userInput: userInputReducer,
  auth: authReducer
});
