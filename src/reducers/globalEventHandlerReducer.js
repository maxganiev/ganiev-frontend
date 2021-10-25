import { SET_GLOBAL_EVENT_HANDLER, SET_GLOBAL_EVENT_ARRAY } from '../actions/types';

const initState = {
	arrayOfFunctions: [],
};

// eslint-disable-next-line
export default (state = initState, action) => {
	switch (action.type) {
		default:
			return {
				...state,
			};

		case SET_GLOBAL_EVENT_ARRAY:
			return {
				...state,
				arrayOfFunctions: [...state.arrayOfFunctions, ...action.payload],
			};

		case SET_GLOBAL_EVENT_HANDLER:
			if (action.payload.type === 'scroll') {
				window.onscroll = () => action.payload.callback();
			} else if (action.payload.type === 'resize') {
				window.onresize = () => action.payload.callback();
			}

			return {
				...state,
			};
	}
};
