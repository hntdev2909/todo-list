import filtersReducer from './filters';
import todosReducer from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	todos: todosReducer,
	filters: filtersReducer,
});

export default rootReducer;
