import { SET_SCROLL_POS } from './types';

export const setScrollPos = (scrollTop) => (dispatch) => {
	dispatch({
		type: SET_SCROLL_POS,
		payload: scrollTop,
	});
};
