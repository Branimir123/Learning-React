import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log(action.payload.data);
            //[post1, post2...] should be transformed to {1: post1, 2: post2...}
            return _.mapKeys(action.payload.data, 'id');
            //mapKeys makes the life easier by letting us use array["SomeKey"] on the array with 
            //which we called it. The second parameter is the key which we prefer to use.
        default:
            return state;
    }
}