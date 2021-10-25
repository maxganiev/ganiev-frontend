import { SET_NAV_CONTENT } from '../actions/types';

const initState = {
	navList: [],
};

// eslint-disable-next-line
export default (state = initState, action) => {
	switch (action.type) {
		default:
			return state;

		case SET_NAV_CONTENT:
			return {
				...state,
				navList: action.payload,
			};
	}
};
