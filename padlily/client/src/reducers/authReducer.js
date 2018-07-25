import {
    IS_AUTHENTICATED
} from '../constants/actionTypes';

const initialState = {
    user: null
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case IS_AUTHENTICATED:
            return {...state, user: payload}
        default:
            return state
    }
}

export default authReducer;