import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

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
                         
                // - redirect to the route '/feautre' (or what we need)
                browserHistory.push('/feature');
            })
            // If request is bad   
            .catch(() => {
                // - Show an error to the user     

            });

       


    }
}