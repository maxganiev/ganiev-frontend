import { SET_GLOBAL_EVENT_HANDLER, SET_GLOBAL_EVENT_ARRAY } from './types';

//set array of global event handler
export const setWindowEventsArray = (eventRefObject) => {
	return {
		type: SET_GLOBAL_EVENT_ARRAY,
		payload: eventRefObject,
	};
};

//call global event handler
export const callWindowEventHandler = (eventRefObject) => {
	return {
		type: SET_GLOBAL_EVENT_HANDLER,
		payload: eventRefObject,
	};
};
