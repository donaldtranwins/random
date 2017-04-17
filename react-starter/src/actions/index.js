import axios from 'axios';
import { FETCH_TODOS, ADD_TODOS, GET_1_TODO } from './types';


const BASE_URL = 'http://scottbowlerdev.com/api';
const API_KEY = `?key=\\i;love?%you'"\`sc♥tt /`;

export function fetchTodos(){
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: FETCH_TODOS,
        payload: request
    }
}

export function getOneTodo(id){
    const request = axios.get(`${BASE_URL}/todos/${id}${API_KEY}`);

    return {
        type: GET_1_TODO,
        payload: request
    }
}

export function addTodo(item){
    const request = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: ADD_TODOS,
        payload: request
    }
}