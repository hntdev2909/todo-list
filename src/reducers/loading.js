import { CALLING_SERVER, CALLED_SERVER } from '../constants/nameTypes';

const initialState = {
	isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CALLING_SERVER:
			return {
				...state,
				isLoading: true,
			};

		case CALLED_SERVER:
			return {
				...state,
				isLoading: false,
			};

		default:
			return { ...state };
	}
};

export default loadingReducer;
