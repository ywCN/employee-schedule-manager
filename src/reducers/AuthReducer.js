import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action); // test
    switch (action.type) {
        case EMAIL_CHANGED:
            // This assignment will not create new state
            // so old===new, redux will not record change
            // state.email = action.payload;
            // return state;

            // This will create a new object
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
