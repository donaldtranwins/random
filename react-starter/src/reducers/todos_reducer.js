import { FETCH_TODOS } from '../actions/types';

const default_state = {
    all: [],
    single: null
};


export default function (state = default_state, action){
    switch(action.type){
        case FETCH_TODOS:
            return { ...state, all: action.payload.data.todos };
        default:
            return state;
    }
}