import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

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
                         
                // - redirect to the route '/feautre' (or what we need)
                browserHistory.push('/feature');
            })
            // If request is bad   
            .catch(() => {
                // - Show an error to the user     
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}