import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setScrollPos } from '../../actions/scrollerAction';
import { setWindowEventsArray } from '../../actions/globalEventHandlerAction';
import { callWindowEventHandler } from '../../actions/globalEventHandlerAction';

const Scroller = ({ scrollPos, setScrollPos, setWindowEventsArray, arrayOfFunctions, callWindowEventHandler }) => {
	// const [scrollerRad, setScrollerRad] = useState(40);
	const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

	const canvasRef = useRef(null);

	const drawScroller = () => {
		const ctx = canvasRef.current.getContext('2d');
		const canvasWidth = canvasRef.current.width;
		const canvasHeight = canvasRef.current.height;
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);

		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.arc(50, 50, 40, 0, 180 * (Math.PI / 90), true);
		ctx.fill();
		ctx.closePath();

		const startAngle =
			(scrollPos / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 180 * (Math.PI / 90) -
			Math.PI / 2;

		const endAngle = 0 - Math.PI / 2;

		ctx.strokeStyle = '#000';
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.arc(50, 50, 40, startAngle, endAngle, true);
		ctx.stroke();
		ctx.closePath();
	};

	//set scrollPos and eventsArray onload:
	useEffect(() => {
		setScrollPos(document.documentElement.scrollTop);

		setWindowEventsArray([
			{
				type: 'scroll',
				callback: () => {
					setScrollPos(document.documentElement.scrollTop);
				},
			},
			{
				type: 'resize',
				callback: () => {
					//setScrollerRad(40);
					setClientWidth(document.documentElement.clientWidth);
				},
			},
		]);
		// eslint-disable-next-line
	}, []);

	//calling global window event handler for each action that is required to be handled by global Window object; it is done on arrayOfEvents uploading so as its callbacks will be availble; later; just callbacks are being called against each certain type of event
	useEffect(() => {
		if (arrayOfFunctions.length !== 0) {
			callWindowEventHandler({
				type: 'scroll',
				callback: (type) => {
					type = 'scroll';
					arrayOfFunctions.forEach((obj) => obj.type === type && obj.callback());
				},
			});

			callWindowEventHandler({
				type: 'resize',
				callback: (type) => {
					type = 'resize';
					arrayOfFunctions.forEach((obj) => obj.type === type && obj.callback());
				},
			});
		}
		// eslint-disable-next-line
	}, [arrayOfFunctions]);

	//drawing on canvas
	useEffect(() => {
		setTimeout(() => {
			drawScroller();
		}, 100);
		// eslint-disable-next-line
	}, [scrollPos, clientWidth]);

	return <canvas className='scroller' ref={canvasRef}></canvas>;
};

Scroller.propTypes = {
	scrollPos: PropTypes.number.isRequired,
	setScrollPos: PropTypes.func.isRequired,
	setWindowEventsArray: PropTypes.func.isRequired,
	arrayOfFunctions: PropTypes.array.isRequired,
	callWindowEventHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
	arrayOfFunctions: state.globalEventHandlerReducer.arrayOfFunctions,
});

export default connect(mapStateToProps, { setScrollPos, setWindowEventsArray, callWindowEventHandler })(Scroller);
