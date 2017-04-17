import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';

import App from './components/app';
import ViewList from './components/view_list';
import AddForm from './components/addForm';

import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ViewList}/>
                <Route path="/new-todo" component={AddForm} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
