
import { applyMiddleware } from './applyMiddleware.js';
import { splitArgs } from './util.js';


/*
 * reducer is required
 * Optional preloaded state: an object
 * Optional enhancer: the middleware function to apply to the store
 */
export const createStore = (reducers, preloadedState, enhancer) => {
  let state = {count: 0};

  let { initialState, middleWare } = splitArgs([preloadedState, enhancer]);

  if(initialState) {
    state = initialState;
  }

  const handleAction = (action) => {
    let newState = {...state};
    if(middleWare) {
      newState = middleWare(action, newState);
    }
    newState = reducers(action, newState);
    state = newState;
  };

  const store = {
    getState: () => ({...state}),
    dispatch: (action) => handleAction(action)
  };
  return store;
}
