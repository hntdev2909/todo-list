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

const loadDataAction = (value) => {
	return {
		type: LOAD_DATA,
		payload: value,
	};
};

const addTodosAction = (value) => {
	return {
		type: ADD_TODOS,
		payload: value,
	};
};

const changeTypeAction = (value) => {
	return {
		type: CHANGE_TYPE,
		payload: value,
	};
};

const changeTypeAllAction = (value) => {
	return {
		type: CHANGE_TYPE_ALL,
		payload: value,
	};
};

const deleteTaskAction = (value) => {
	return {
		type: DELETE_TASK,
		payload: value,
	};
};

const editTaskAction = (value) => {
	console.log(value);
	return {
		type: EDIT_TASK,
		payload: {
			id: value.id,
			content: value.value.content,
		},
	};
};

const clearTaskCompletedAction = () => {
	return {
		type: CLEAR_TASK_COMPLETED,
	};
};

// middleware

const loadData = (param) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.callListTask(param)
			.then((res) => {
				dispatch(loadDataAction(res.data));
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
				dispatch(addTodosAction(res.data));
				dispatch(calledServer());
			})
			.catch((err) => {
				console.log(err);
				dispatch(calledServer());
			});
	};
};

const changeTypeAll = (value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editTypeAll(value)
			.then(() => {
				dispatch(changeTypeAllAction(value.isCompleted));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Change fail');
				dispatch(calledServer());
			});
	};
};

const changeType = (id, value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editLisTask(id, value)
			.then(() => {
				dispatch(changeTypeAction(id));
				dispatch(calledServer());
			})
			.catch((err) => {
				console.log('Err', err);
				dispatch(calledServer());
			});
	};
};

const editTask = (id, value) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editLisTask(id, value)
			.then(() => {
				dispatch(editTaskAction({ id, value }));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err');
				dispatch(calledServer());
			});
	};
};

const deleteTask = (id) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.deleteTask(id)
			.then(() => {
				dispatch(deleteTaskAction(id));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err delete');
				dispatch(calledServer());
			});
	};
};

const filters = (action) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.filtersType(action)
			.then((res) => {
				dispatch(loadDataAction(res.data));
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Err');
				dispatch(calledServer());
			});
	};
};

const clearTask = () => {
	return (dispatch) => {
		dispatch(callingServer());
		API.deleteAll()
			.then(() => {
				dispatch(clearTaskCompletedAction());
				dispatch(calledServer());
			})
			.catch(() => {
				console.log('Delete fail');
				dispatch(calledServer());
			});
	};
};

export {
	loadData,
	editTask,
	createTask,
	changeType,
	changeTypeAll,
	deleteTask,
	filters,
	clearTask,
};
