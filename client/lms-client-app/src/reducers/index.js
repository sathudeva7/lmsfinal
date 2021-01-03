import {combineReducers} from 'redux';
import lessonReducer from './lessonReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    lesson:lessonReducer,
    auth:authReducer,
    error:errorReducer
})