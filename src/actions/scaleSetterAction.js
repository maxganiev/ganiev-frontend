import { SET_SCALE } from './types';

export const setScale = (payload) => {
	return {
		type: SET_SCALE,
		payload,
	};
};
