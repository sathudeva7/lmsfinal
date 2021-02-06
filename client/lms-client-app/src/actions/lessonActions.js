import {GET_LESSONS,ADD_LESSON,LESSON_FAIL,DELETE_LESSON,LESSONS_LOADING } from '../actions/Types';
import axios from 'axios';
import {tokenConfig} from './authActions'
import {returnErrors} from './errorActions'
export const getLessons = () => (dispatch,getState) => {
    dispatch(setLessonsLoading());
    axios.get('http://localhost:5000/lessons/lesson',tokenConfig(getState))
    .then(res => 
        dispatch({
            type:GET_LESSONS,
            payload:res.data
        }))
}

export const createLesson = ({lesson,grade}) => (dispatch,getState) => {

    const body = JSON.stringify({lesson,grade})

    axios.post('http://localhost:5000/lessons/lesson',body,tokenConfig(getState))
    .then(res => dispatch({
        type:ADD_LESSON,
        payload:res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status,'LESSON_FAIL'))
        dispatch({
            type:LESSON_FAIL
        });
    })
}

export const setLessonsLoading = () => {
    return{
        type:LESSONS_LOADING
    }
}