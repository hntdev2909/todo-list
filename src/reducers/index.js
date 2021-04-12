import todosReducer from './todos';
import loadingReducer from './loading';
import alertReducer from './alert';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	todos: todosReducer,
	loading: loadingReducer,
	alert: alertReducer,
});

export default rootReducer;
