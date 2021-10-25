import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import mainBg from '../assets/Imgs/main-bg/main.PNG';

const ParalaxShell = ({ scrollPos }) => {
	const [lineGradValArr, setLineGradValArr] = useState([]);
	const [lineGradKoef, setLineGradKoef] = useState(0.8);
	const [dispenseKoef, setDispenseKoef] = useState(60);

	useEffect(() => {
		const initiLineGradValArr = [90, 100, 110];
		const scrolled = scrollPos / document.documentElement.clientHeight / 1.05;
		setLineGradValArr(
			initiLineGradValArr.map((val) => (val + scrolled * 20 <= 140 ? val + scrolled * 20 : 140))
		);

		setLineGradKoef(scrolled < 0.99 ? scrolled : 1);

		setDispenseKoef(scrolled * 50 < 74 ? scrolled * 50 : 74);
	}, [scrollPos]);

	return (
		<div
			className='paralax-shell'
			style={{
				background: `linear-gradient(315deg, #000000, ${dispenseKoef}%,  rgba(${[
					...lineGradValArr,
				]}, ${lineGradKoef})),
			url('${mainBg}') 0% center/cover`,
			}}
		></div>
	);
};

ParalaxShell.propTypes = {
	scrollPos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
});

export default connect(mapStateToProps)(ParalaxShell);
