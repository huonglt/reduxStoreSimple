import { INCREMENT_ACTION, DECREMENT_ACTION } from './actions.js';

export const reducers = (action, state) => {
  if(action.type == INCREMENT_ACTION.type) {
    return {...state, count: state.count + 1};
  } else if(action.type == DECREMENT_ACTION.type) {
    return {...state, count: state.count - 1};
  }
  return state;
}
