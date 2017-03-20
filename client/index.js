import { configStore } from './store/index.js';
import { INCREMENT_ACTION, DECREMENT_ACTION } from './store/actions.js';

const store = configStore();
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);
console.log('store.getState() = ', store.getState());
