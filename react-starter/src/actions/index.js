import axios from 'axios';
import { FETCH_TODOS } from './types';

const BASE_URL = 'http://scottbowlerdev.com/api';
const API_KEY = `?key=\\i;love?%you'"\`sc♥tt /`;

export function fetchTodos(){
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: FETCH_TODOS,
        payload: request
    }
}