import { reducers } from './reducers.js';
import { logging1, logging2 } from './middleWares.js';
import { createStore } from './createStore.js';
import { applyMiddleware } from './applyMiddleware.js';

export const configStore = () => {
    const store = createStore(reducers, applyMiddleware(logging1, logging2));
    return store;
}
