import axios from 'axios';
import FETCH_WEATHER from './types';

const API_KEY  = require('../../config').API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(coordinates) {
    const url = `${ROOT_URL}&lat=${coordinates.lat}&lon=${coordinates.lon}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
