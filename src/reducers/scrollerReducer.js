import { SET_SCROLL_POS } from '../actions/types';

const initState = {
	scrollPos: 0,
};

// eslint-disable-next-line
export default (state = initState, action) => {
	switch (action.type) {
		default:
			return state;

		case SET_SCROLL_POS:
			return {
				...state,
				scrollPos: Math.ceil(action.payload),
			};
	}
};
