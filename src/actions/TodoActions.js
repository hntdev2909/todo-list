export const loadData = (value) => {
	return {
		type: 'loadData',
		payload: value,
	};
};

export const addTodos = (value) => {
	return {
		type: 'addTodos',
		payload: value,
	};
};

export const changeType = (value) => {
	return {
		type: 'changeType',
		payload: value,
	};
};

export const changeTypeAll = (value) => {
	return {
		type: 'changeTypeAll',
		payload: value,
	};
};

export const deleteTask = (value) => {
	return {
		type: 'deleteTask',
		payload: value,
	};
};

export const editTask = (value) => {
	return {
		type: 'editTask',
		payload: {
			id: value.id,
			content: value.editValue,
		},
	};
};

export const clearTaskCompleted = () => {
	return {
		type: 'clearTaskCompleted',
	};
};
