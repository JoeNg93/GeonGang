import { combineReducers } from 'redux';
import userInputReducer from './userInputReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import userInfoReducer from './userInfoReducer';
import recordReducer from './recordReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  userInput: userInputReducer,
  auth: authReducer,
  modal: modalReducer,
  userInfo: userInfoReducer,
  record: recordReducer,
  category: categoryReducer
});
