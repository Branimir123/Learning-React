import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
           return [ action.payload.data, ...state ];
        //Completely identical to the next one        
        //return state.concat([action.payload.data]);
        //BUT NOT state.push([action.payload.data..])..
    }
    return state;
}