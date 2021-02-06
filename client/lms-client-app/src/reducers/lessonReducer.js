import uuid from 'uuid';
import {GET_LESSONS,ADD_LESSON,DELETE_LESSON,LESSONS_LOADING } from '../actions/Types';
const initialState = {
  lessons:[],
  loading:false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_LESSONS:
            return {
                ...state,
                lessons:action.payload,
                loading:false
            };
        case LESSONS_LOADING:
            return{
                ...state,
                loading:true
            }
        case ADD_LESSON:
                return{
                    ...state,
                    lessons:action.payload,
                    loading:false   
                }
        default:
            return state;
    }
}