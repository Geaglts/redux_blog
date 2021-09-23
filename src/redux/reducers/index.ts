import { combineReducers } from 'redux';
import userReducer from './users';
import publicationsReducer from './publications';

export default combineReducers({ userReducer, publicationsReducer });
