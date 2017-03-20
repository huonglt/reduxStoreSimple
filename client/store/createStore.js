
import { applyMiddleware } from './applyMiddleware.js';
import { splitArgs } from './util.js';


/*
 * middleWares is an array of function(action, style).
 * the order of execution would be from the right most to the left most
 */
export const createStore = (reducers, ...others) => {
  let state = {count: 0};

  let { initialState, middleWare } = splitArgs(others);

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

  const store = {};
  store.getState = () => ({...state});
  store.dispatch = (action) => handleAction(action);
  return store;
}
