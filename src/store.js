import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const middleWare = [thunk, createLogger()];

const initStore = (preload = {}) => {
    const store = createStore(reducer, preload, applyMiddleware(...middleWare));
    return store;
};

export default initStore;