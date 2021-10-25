import { SET_NAV_CONTENT } from './types';

//set content of navbar
export const setNavlist = (dataList) => {
	return {
		type: SET_NAV_CONTENT,
		payload: dataList,
	};
};
