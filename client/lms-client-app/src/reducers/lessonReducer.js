import uuid from 'uuid';
import {GET_LESSONS,ADD_LESSON,DELETE_LESSON } from '../actions/Types';
const initialState = {
  lessons:[
        {id: uuid(), name:'Maths'},
        {id:uuid(), name:'Science'},
        {id:uuid(),name:'History'}
    ]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_LESSONS:
            return {
                ...state
            };
        default:
            return state;
    }
}