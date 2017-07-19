import { FETCH_WEATHER } from '../actions/types';

export default function(state = [], action){
    console.log('reducer state: ', state);
    switch(action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }
    return state;
}

