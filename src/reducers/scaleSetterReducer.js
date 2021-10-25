import { SET_SCALE } from '../actions/types';

const initState = {
	scaleSetter: {
		d: null,
		f: null,
	},
};

// eslint-disable-next-line
export default (state = initState, action) => {
	switch (action.type) {
		default:
			return state;

		case SET_SCALE:
			return {
				...state,
				scaleSetter: action.payload,
			};
	}
};
