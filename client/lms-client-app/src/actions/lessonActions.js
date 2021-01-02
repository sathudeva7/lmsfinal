import {GET_LESSONS,ADD_LESSON,DELETE_LESSON,LESSONS_LOADING } from '../actions/Types';
import axios from 'axios';
export const getLessons = () => dispatch => {
    dispatch(setLessonsLoading());
    axios.get('http://localhost:5000/lessons/lesson')
    .then(res => 
        dispatch({
            type:GET_LESSONS,
            payload:res.data
        }))
}

export const setLessonsLoading = () => {
    return{
        type:LESSONS_LOADING
    }
}