import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS} from '../actions/Types';
import axios from 'axios';

//check token and load user
export const loadUser = () => (dispatch,getState) => {
    //user loading
    dispatch({type: USER_LOADING});
    
    axios.get('http://localhost:5000/user/user',tokenConfig(getState))
    .then(res => dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch(err=> {
        dispatch({type:AUTH_ERROR});
    });
};

//register
export const register = ({firstname,lastname,grade,email,password,gender,schoolName,roles}) =>dispatch => {
    //headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body = JSON.stringify({firstname,lastname,grade,email,password,gender,schoolName,roles})

    axios.post('http://localhost:5000/user/register',body,config)
    .then(res => dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err => {
        dispatch({
            type:REGISTER_FAIL
        });
    })
}




export const tokenConfig = getState => {
    //get token from local storage
    const token = getState().auth.token;

    //headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    //if token, add to header
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}