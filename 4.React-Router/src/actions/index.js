import axios from 'axios';
const API_KEY = require('../../config.js').API_KEY;

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values) {
    const requst = axios.get(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: request
    };
}