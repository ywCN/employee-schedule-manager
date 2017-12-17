import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // This assignment will not create new state
            // so old===new, redux will not record change
            // state.email = action.payload;
            // return state;

            // This will create a new object
            return { ...state, email: action.payload };
        default:
            return state;
    }
};
