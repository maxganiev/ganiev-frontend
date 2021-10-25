//this is a main reducer where all other reducers will be supplied
import { combineReducers } from 'redux';
import scrollerReducer from './scrollerReducer';
import globalEventHandlerReducer from './globalEventHandlerReducer';
import navContentReducer from './navContentReducer';
import scaleSetterReducer from './scaleSetterReducer';

export default combineReducers({
	scroller: scrollerReducer,
	globalEventHandlerReducer: globalEventHandlerReducer,
	navContentReducer: navContentReducer,
	scaleSetter: scaleSetterReducer,
});
