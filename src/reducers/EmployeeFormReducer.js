import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
    // shift: 'Monday' // can work but not good
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
            // [action.payload.prop]: action.payload.value
            // is ES6 key interpolation
            // it can become: name, shift, or ...
        case EMPLOYEE_CREATE:
            return INITIAL_STATE; // reset attribute in form
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE; // reset attribute in form
        default:
            return state;
    }
};
