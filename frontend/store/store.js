import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
