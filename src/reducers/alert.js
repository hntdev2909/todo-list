import { LOADING_FAILURE, LOADING_SUCCESS } from '../constants/nameTypes';

const initialState = {
	icon: '',
	title: '',
	button: '',
	dangerMode: false,
	timer: 2000,
};

const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_SUCCESS:
			return {
				...state,
				icon: 'success',
				title: 'Success',
				button: 'Confirm',
			};

		case LOADING_FAILURE:
			return {
				...state,
				icon: 'error',
				title: 'Failure',
				button: 'OK',
			};

		default:
			return { ...state };
	}
};

export default alertReducer;
