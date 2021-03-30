const initialState = {};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'changeViewModule':
			return (dispatch) => {
				// dispatch(displayNotification(notify));
				// return dispatch(setInventory(inventoryItem));
			};
		default:
			return state;
	}
};

export default filtersReducer;
