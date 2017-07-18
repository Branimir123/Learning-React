import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER, 
    UNAUTH_USER, 
    AUTH_ERROR, 
    FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
    return function(dispatch) {
         // Submit mail/password to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            // If good
            .then(response => {
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - Save the JWT token
                localStorage.setItem('token', reponse.data.token);
                         
                // - redirect to the route '/feautre' (or whatever route we need)
                browserHistory.push('/feature');
            })
            // If request is bad   
            .catch(() => {
                // - Show an error to the user     
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({ email, password }) {
    return function(dispatch) {
        // Submit the post request
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(() => {
                // Update state, so it shows that we are authenticated
                dispatch({ type: AUTH_USER});

                // Save token to local storage
                localStorage.setItem('token', response.data.token);

                // - redirect to the route '/feature' (or whatever route we need)
                browserHistory.push('/feautre');
            })
            .catch(() => {
                dispatch(authError(response.data.error));
            });
    }
}


export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then((response) => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                });
            });
    }
}