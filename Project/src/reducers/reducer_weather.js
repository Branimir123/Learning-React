import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/types';

export default function(state = {}, action){
    console.log('reducer state: ', state);
    switch(action.type){
        case FETCH_WEATHER:
            return  { ...state, coords: action.payload.data }; 
        case FETCH_WEATHER_ERROR:
            return { ...state, error: action.payload }
    }
    return state;
}

