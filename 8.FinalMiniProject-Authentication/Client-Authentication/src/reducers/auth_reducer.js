import { 
    AUTH_USER, 
    NOT_AUTH_USER, 
    AUTH_ERROR, 
    FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true }
        case NOT_AUTH_USER:
            return { ...state, authenticated: false } 
        case AUTH_ERROR:
            return { ...state, error: action.payload }
        case FETCH_MESSAGE:
            return { ...state, message: action.payload }
    }

    return state;
}