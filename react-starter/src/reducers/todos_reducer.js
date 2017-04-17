import { FETCH_TODOS, GET_1_TODO } from '../actions/types';

const default_state = {
    all: [],
    single: null
};


export default function (state = default_state, action){
    switch(action.type){
        case FETCH_TODOS:
            return { ...state, all: action.payload.data.todos };
        case GET_1_TODO:
            console.log(action);
            return { ...state, single: action.payload.data.todo };
        default:
            return state;
    }
}