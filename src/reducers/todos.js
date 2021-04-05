const initialState = [];

const addTodosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'loadData': // DONE
			return action.payload;

		case 'addTodos':
			return [...state, action.payload];

		case 'changeType': // DONE
			let indexTask = state.findIndex((task) => task._id === action.payload);
			state[indexTask].isCompleted = !state[indexTask].isCompleted;
			return [...state];

		case 'clearTaskCompleted':
			const tmpTaskTodos = [...state];
			var tmpListTodo = tmpTaskTodos.filter(
				(task) => task.isCompleted === false
			);
			return [...tmpListTodo];

		case 'changeTypeAll': // DONE
			const tmpTask = [...state];
			tmpTask.map((task) => (task.isCompleted = action.payload));
			return [...tmpTask];

		case 'deleteTask': // DONE
			const tmpState = [...state];
			tmpState.splice(action.payload, 1);
			return [...tmpState];

		case 'editTask': // DONE
			let indexTmpTask = state.findIndex(
				(task) => task._id === action.payload.id
			);
			state[indexTmpTask].content = action.payload.content;
			return [...state];
		default:
			return state;
	}
};

export default addTodosReducer;
