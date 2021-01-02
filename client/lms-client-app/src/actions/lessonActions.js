import {GET_LESSONS,ADD_LESSON,DELETE_LESSON } from '../actions/Types';

export const getLessons = () => {
    return {
        type:GET_LESSONS
    };
}