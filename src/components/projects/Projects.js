import React, { useRef, Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import chevronLeft from '../assets/Icns/chevron-left-solid.svg';
import chevronRight from '../assets/Icns/chevron-right-solid.svg';
import { Link } from 'react-router-dom';
import { projectsData } from './ProjectsData';

const Projects = ({ scrollPos }) => {
	const [i, setI] = useState(0);
	const [animatationIsOn, setAnimationIsOn] = useState(false);

	//get id of currently hovered slide
	const [curSlide, setCurSlide] = useState(0);

	//preview bg animation
	const animate = () => {
		//state can be updated only while current component is mounted (that is, current page is in tab; if component is unmounted (changed to another tab), we cannot update its state)
		if (i < 1 && !window.location.pathname.includes('project')) {
			setI(i + 1);
		}
		if (i === 1 && !window.location.pathname.includes('project')) {
			setI(0);
		}
	};

	useEffect(() => {
		let timer;
		if (animatationIsOn === true) {
			timer = setTimeout(() => {
				animate();
			}, 1400);
		} else {
			clearTimeout(timer);
			setCurSlide(0);
		}

		// eslint-disable-next-line
	}, [i, animatationIsOn]);

	//slider scroll
	const projectsSlider_Ref = useRef(null);
	const slideRight = () => {
		projectsSlider_Ref.current.insertBefore(
			projectsSlider_Ref.current.lastElementChild,
			projectsSlider_Ref.current.firstElementChild
		);
	};

	const slideLeft = () => {
		projectsSlider_Ref.current.appendChild(projectsSlider_Ref.current.firstElementChild);
	};

	useEffect(() => {
		if (scrollPos > document.documentElement.clientHeight * 1.8)
			projectsSlider_Ref.current.style.transform = 'translate(0%)';
	}, [scrollPos]);

	return (
		<div className='project-slider-wrapper'>
			<h3 style={{ transform: `translateX(${document.documentElement.clientWidth / 2.2}px)` }}>
				{' '}
				My projects{' '}
			</h3>
			<Fragment>
				<img
					src={chevronLeft}
					className='icn icn-chevron-left'
					onClick={() => slideLeft()}
					alt='slide left'
				/>
				<img
					src={chevronRight}
					className='icn icn-chevron-right'
					onClick={() => slideRight()}
					alt='slide right'
				/>
			</Fragment>
			<div className='projects-shell-slider' id='projects' ref={projectsSlider_Ref}>
				{projectsData.map((elem, index) => {
					return (
						<div
							key={index}
							className={elem.id.slice(0, elem.id.indexOf('-'))}
							id={elem.id}
							style={
								curSlide === elem.id
									? {
											backgroundImage: `url(${elem.data.bgImg[i]})`,
									  }
									: {
											backgroundImage: `url(${elem.data.bgImg[0]})`,
									  }
							}
							onMouseEnter={(e) => {
								setAnimationIsOn(true);
								setCurSlide(e.target.parentElement.id);
							}}
							onMouseLeave={() => setAnimationIsOn(false)}
						>
							<h4> {elem.data.projectName} </h4>
							<Link to={`project/${elem.id}`} className='slider-select'>
								{' '}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Projects.propTypes = {
	scrollPos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
});

export default connect(mapStateToProps)(Projects);
