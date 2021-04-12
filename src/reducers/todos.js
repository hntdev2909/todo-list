import {
	LOAD_DATA,
	ADD_TODOS,
	CHANGE_TYPE,
	CHANGE_TYPE_ALL,
	DELETE_TASK,
	EDIT_TASK,
	CLEAR_TASK_COMPLETED,
} from '../constants/nameTypes';

const initialState = [];

const addTodosReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA:
			return action.payload;

		case ADD_TODOS:
			return [...state, action.payload];

		case CHANGE_TYPE:
			let indexTask = state.findIndex((task) => task._id === action.payload);
			state[indexTask].isCompleted = !state[indexTask].isCompleted;
			return [...state];

		case CHANGE_TYPE_ALL:
			const tmpTask = [...state];
			tmpTask.map((task) => (task.isCompleted = action.payload));
			return [...tmpTask];

		case DELETE_TASK:
			const tmpState = [...state];
			const tmpTaskDelete = tmpState.filter((task) => {
				return task._id !== action.payload;
			});
			return [...tmpTaskDelete];

		case EDIT_TASK:
			console.log(action.payload);
			let indexTmpTask = state.findIndex(
				(task) => task._id === action.payload.id
			);
			state[indexTmpTask].content = action.payload.content;
			return [...state];

		case CLEAR_TASK_COMPLETED:
			const tmpTaskTodos = [...state];
			var tmpListTodo = tmpTaskTodos.filter(
				(task) => task.isCompleted === false
			);
			return [...tmpListTodo];

		default:
			return state;
	}
};

export default addTodosReducer;
