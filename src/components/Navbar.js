import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWindowEventsArray } from '../actions/globalEventHandlerAction';
import { callWindowEventHandler } from '../actions/globalEventHandlerAction';
import { Link } from 'react-router-dom';

const Navbar = ({ navList, setWindowEventsArray, callWindowEventHandler, arrayOfFunctions }) => {
	const [deg, setDeg] = useState(0);
	const [visibility, setVisibility] = useState('none');
	const [translateX, setTranslateX] = useState(80);
	const [navContentWidth, setNavContentWidth] = useState(
		document.documentElement.clientWidth < 500 ? 60 : 40
	);
	const [navContentHeight, setNavContentHeight] = useState(10);

	useEffect(() => {
		setWindowEventsArray([
			{
				type: 'resize',
				callback: () => {
					setNavContentWidth(document.documentElement.clientWidth < 500 ? 60 : 40);
				},
			},
		]);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (arrayOfFunctions.length !== 0) {
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

	const updateStyle = (e) => {
		setDeg(deg === 0 ? -90 : 0);
		setTranslateX(translateX === 80 ? 0 : 80);
		setVisibility(visibility === 'none' ? 'block' : 'none');
		setNavContentHeight(navContentHeight === 10 ? 100 : 10);
	};
	return (
		<nav>
			<div className='nav-bar' onClick={updateStyle} style={{ transform: `rotate(${deg}deg)` }}>
				{' '}
			</div>

			<div
				className='nav-content'
				style={{
					transform: `translate(${translateX}%) `,
					width: `${navContentWidth}%`,
					height: `${navContentHeight}vh`,
				}}
			>
				<ul>
					{navList.map((l) => {
						//for navigation between components components we use Links as they do not re render page from scratch unlike <a>; for scroll navigation we use standard <a>
						return (
							<li key={l} style={{ display: visibility }}>
								{l === 'home' ? (
									<Link to='/'> {l} </Link>
								) : (
									<a href={`#${l}`}> {l} </a>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	navList: state.navContentReducer.navList,
	arrayOfFunctions: state.globalEventHandlerReducer.arrayOfFunctions,
});

Navbar.propTypes = {
	navList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { setWindowEventsArray, callWindowEventHandler })(Navbar);
