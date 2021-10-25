import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import avatar from '../assets/Imgs/bio/me.svg';
import { Benefits } from '../Benefits';

const Paralax = ({ scrollPos }) => {
	const bioShellRef = useRef(null);
	const [opacity, setOpacity] = useState(0);
	const [scale, setScale] = useState(0);

	useEffect(() => {
		const scrolled = scrollPos / document.documentElement.clientHeight / 1.05;

		if (scrollPos > document.documentElement.clientHeight / 4) {
			setOpacity(scrolled <= 0.99 ? scrolled : 1);
			setScale(scrolled <= 0.99 ? scrolled : 1);
		}
		// eslint-disable-next-line
	}, [scrollPos]);

	//set dates for bio
	const [years, setYears] = useState(null);
	const [days, setDays] = useState(null);
	const [yearsOfExperience, setYearsOfExperience] = useState(null);

	useEffect(() => {
		const bDay = new Date('August 19, 1991 19:30');
		const firstStudyDay = new Date('January 20, 2020 12:00');
		const today = new Date();

		const difference = today.getTime() - bDay.getTime();
		const experience = today.getTime() - firstStudyDay.getTime();
		//ms in day:
		const day = 1000 * 60 * 60 * 24;

		setDays(Math.round(difference / day));
		setYears(Math.round(difference / day / 365));

		setYearsOfExperience(experience / day / 365);
	}, [days, years]);

	return (
		<Fragment>
			<div
				className='bio-shell'
				id='bio'
				ref={bioShellRef}
				style={{
					top: `${document.documentElement.clientHeight}px`,
					opacity: opacity,
					transform: `scale(${scale})`,
				}}
			>
				<div className='bio-img'>
					{scrollPos > document.documentElement.clientHeight / 4 && (
						<img
							src={avatar}
							className='avatar'
							alt='avatar logo should have been here...'
						/>
					)}

					<h3> &#128075; my name is Max Ganiev </h3>
					<h3> I am Frontend Developer </h3>
				</div>

				<div className='bio-descr'>
					{' '}
					<p>
						{' '}
						I was born&nbsp;{years} years (or&nbsp;{days} days) ago, in the small town
						on the South of Russia, currently live in Saint-Petersburg. I have been
						doing web development professionally for&nbsp;
						{yearsOfExperience !== null && yearsOfExperience.toFixed(2)}&nbsp; years.
						I am mostly specialized in Frontend area that is responsible for user
						experience and client side interactions. Techologies change every day, and
						I constantly monitor contemporary trends to keep pace with time. New
						tools, more awesome and powerful than before, allow to create super
						dynamic, nice-looking and extremely useful websites, and make everyday
						life more entartaining and simple.
					</p>{' '}
					<Benefits />
				</div>
			</div>
		</Fragment>
	);
};

Paralax.propTypes = {
	scrollPos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
});

export default connect(mapStateToProps)(Paralax);
