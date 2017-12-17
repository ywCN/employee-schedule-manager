import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
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
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => { // manually dispatch
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
            });
    };  
};
