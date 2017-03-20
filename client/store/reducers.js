import { INCREMENT_ACTION, DECREMENT_ACTION } from './actions.js';

export const reducers = (action, state) => {
  switch(action.type) {
    case INCREMENT_ACTION.type: return {...state, count: state.count + 1};
    case DECREMENT_ACTION.type: return {...state, count: state.count - 1};
    default: return state;
  }
}
