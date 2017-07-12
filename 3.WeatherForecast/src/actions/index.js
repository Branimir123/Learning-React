import axios from 'axios';

const API_KEY = '03a9ee5397472932914501d6cd14ae84';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);

    //It must return an action, and action ALWAYS has a type property
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
