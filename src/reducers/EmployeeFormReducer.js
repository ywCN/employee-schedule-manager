import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
            // [action.payload.prop]: action.payload.value
            // is ES6 key interpolation
            // it can become: name, shift, or ...
        default:
            return state;
    }
};
