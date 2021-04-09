import todosReducer from './todos';
import loadingReducer from './loading';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	todos: todosReducer,
	loading: loadingReducer,
});

export default rootReducer;
