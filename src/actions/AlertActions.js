import { LOADING_SUCCESS, LOADING_FAILURE } from '../constants/nameTypes';

const loadingSuccess = () => {
	return {
		type: LOADING_SUCCESS,
	};
};

const loadingFailure = () => {
	return {
		type: LOADING_FAILURE,
	};
};

export { loadingSuccess, loadingFailure };
