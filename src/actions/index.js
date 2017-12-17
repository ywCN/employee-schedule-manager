import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => { // this pattern is for asyn action
    // return a function, so Redux will immediate call the function
    return (dispatch) => { // since we have dispatch, we can dispatch many actions
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user));
            });
    };  
};

// helper function
const loginUserSuccess = {dispatch, user} => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

