import { combineReducers } from 'redux';
import userInputReducer from './userInputReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import userInfoReducer from './userInfoReducer';
import recordReducer from './recordReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import homepage1Reducer from './homepage1Reducer';

export default combineReducers({
  userInput: userInputReducer,
  auth: authReducer,
  modal: modalReducer,
  userInfo: userInfoReducer,
  record: recordReducer,
  category: categoryReducer,
  product: productReducer,
  homepage1: homepage1Reducer
});
