const initialState = [];

const addTodosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'loadData':
			return action.payload;
		case 'addTodos':
			return [...state, { content: action.payload, isCompleted: false }];
		case 'changeType':
			state[action.payload].isCompleted = !state[action.payload].isCompleted;
			return [...state];

		case 'clearTaskCompleted':
			const tmpTaskTodos = [...state];
			let afterClear = tmpTaskTodos.filter(
				(task) => task.isCompleted === false
			);
			return [...afterClear];
		case 'changeTypeAll':
			const tmpTask = [...state];
			tmpTask.map((task) => (task.isCompleted = action.payload));
			console.log(tmpTask);
			return [...tmpTask];

		case 'deleteTask':
			const tmpState = [...state];
			tmpState.splice(action.payload, 1);
			return [...tmpState];

		case 'editTask':
			const tmpData = [...state];
			tmpData[action.payload.index].content = action.payload.content;
			return [...tmpData];
		default:
			return state;
	}
};

export default addTodosReducer;
