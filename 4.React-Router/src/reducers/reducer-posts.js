import _ from 'lodash';
import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            //[post1, post2...] should be transformed to {1: post1, 2: post2...}
            return _.mapKeys(action.payload.data, 'id');
            //mapKeys makes the life easier by letting us use array["SomeKey"] on the array with 
            //which we called it. The second parameter is the key which we prefer to use.
            
        case GET_POST:
            const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            //ES6 syntax:
            return { ...state, [action.payload.data.id]: action.payload.data }
        
        case DELETE_POST:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}