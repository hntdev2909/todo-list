import { CALLING_SERVER, CALLED_SERVER } from '../constants/nameTypes';

const callingServer = () => {
	return {
		type: CALLING_SERVER,
	};
};

const calledServer = () => {
	return {
		type: CALLED_SERVER,
	};
};

export { callingServer, calledServer };
