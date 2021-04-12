import { API } from '../api/tasksAPI';
import {
	LOAD_DATA,
	ADD_TODOS,
	CHANGE_TYPE,
	CHANGE_TYPE_ALL,
	DELETE_TASK,
	EDIT_TASK,
	CLEAR_TASK_COMPLETED,
} from '../constants/nameTypes';
import { calledServer, callingServer } from './LoadingActions';

const loadData = (value) => {
	return {
		type: LOAD_DATA,
		payload: value,
	};
};

const addTodos = (value) => {
	return {
		type: ADD_TODOS,
		payload: value,
	};
};

const changeType = (value) => {
	return {
		type: CHANGE_TYPE,
		payload: value,
	};
};

const changeTypeAll = (value) => {
	return {
		type: CHANGE_TYPE_ALL,
		payload: value,
	};
};

const deleteTask = (value) => {
	return {
		type: DELETE_TASK,
		payload: value,
	};
};

const editTask = (value) => {
	console.log(value);
	return {
		type: EDIT_TASK,
		payload: {
			id: value.id,
			content: value.value.content,
		},
	};
};

const clearTaskCompleted = () => {
	return {
		type: CLEAR_TASK_COMPLETED,
	};
};

// middleware

const loadDB = (param) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.callListTask(param)
			.then((res) => {
				dispatch(loadData(res.data));
				dispatch(calledServer());
			})
			.catch((err) => {
				console.log(err);
				dispatch(calledServer());
			});
	};
};

const createTask = (value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.createNewTask(value)
			.then((res) => {
				dispatch(addTodos(res.data));
				dispatch(calledServer());
			})
			.catch((err) => {
				console.log(err);
				dispatch(calledServer());
			});
	};
};

const isFinishAll = (value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editTypeAll(value)
			.then(() => {
				dispatch(changeTypeAll(value.isCompleted));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Change fail');
				dispatch(calledServer());
			});
	};
};

const isFinish = (id, value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editLisTask(id, value)
			.then(() => {
				dispatch(changeType(id));
				dispatch(calledServer());
			})
			.catch((err) => {
				console.log('Err', err);
				dispatch(calledServer());
			});
	};
};

const isEditTask = (id, value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editLisTask(id, value)
			.then(() => {
				dispatch(editTask({ id, value }));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err');
				dispatch(calledServer());
			});
	};
};

const isDeleteTask = (id) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.deleteTask(id)
			.then(() => {
				dispatch(deleteTask(id));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err delete');
				dispatch(calledServer());
			});
	};
};

const isFilter = (action) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.filtersType(action)
			.then((res) => {
				dispatch(loadData(res.data));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err');
				dispatch(calledServer());
			});
	};
};

const isClearFinish = () => {
	return (dispatch) => {
		dispatch(callingServer());
		API.deleteAll()
			.then(() => {
				dispatch(clearTaskCompleted());
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Delete fail');
				dispatch(calledServer());
			});
	};
};

export {
	loadDB,
	createTask,
	isFinishAll,
	isFinish,
	isEditTask,
	isDeleteTask,
	isFilter,
	isClearFinish,
};
