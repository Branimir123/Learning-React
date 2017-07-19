import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_WEATHER:
            return  action.payload.data.weather[0];
        case FETCH_WEATHER_ERROR:
            return  action.payload;
    }
    return state;
}

