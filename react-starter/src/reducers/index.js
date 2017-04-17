import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    form: formReducer
});

export default rootReducer;