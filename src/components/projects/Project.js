import React, { useEffect, useState, useRef, Fragment } from 'react';
import { projectsData } from './ProjectsData';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNavlist } from '../../actions/navContentAction';
import { setScale } from '../../actions/scaleSetterAction';
import { YoutubeFrame } from '../YoutubeFrame';
import faviconSrc from '../assets/Imgs/favicon.png';

const Project = ({ match, setNavlist, scrollPos, setScale, scaleSetter }) => {
	const [currentGallery, setCurrentGallery] = useState(null);
	//loading component
	useEffect(() => {
		//fetching proper data from projectData array
		setCurrentGallery(match.params.project);
		//setting navlist
		setNavlist([
			'home',
			'preview-shell',
			'about',
			'brief visualisation',
			'stack',
			'lighthouse report',
			'send message',
		]);

		//setting animation timer depending on No of slides available for current project page
		projectsData.forEach((el) => {
			if (el.id === match.params.project) {
				setSlidesArr(el.data.animationArr.length);
				setTimer(el.data.timer);
			}
		});

		//set scale by adjusting denominator and factor for form-wrapper transform (Ajax component); init values of scaleSetter obj are null, so the condition above tells React to update component only while scalleSetter values are null (which means only once);
		//while navigating between project page and home, scaleSetter value is remembered so we need to manually re-set it
		Object.values(scaleSetter.scaleSetter).some((val, index, arr) =>
			val === null
				? setScale({ d: 3.6, f: 3 })
				: arr[0] === 2.8 && arr[1] === 2
				? setScale({ d: 3.6, f: 3 })
				: null
		);
		// eslint-disable-next-line
	}, [scaleSetter]);

	//preview
	const [opacity, setOpacity] = useState(0);
	const [scale, setPrwScale] = useState(3);

	useEffect(() => {
		//re-resetting a favicon
		const favicon = document.getElementById('favicon');
		favicon.href = faviconSrc;

		setTimeout(() => {
			setOpacity(1);
			setPrwScale(1);
		}, 300);
	}, []);

	//about
	const aboutRef = useRef(null);
	const [iframeLoaded, setIframeLoaded] = useState(false);

	useEffect(() => {
		if (aboutRef.current !== null && scrollPos > aboutRef.current.getBoundingClientRect().top) {
			setTimeout(() => {
				aboutRef.current.style.opacity = opacity;
				aboutRef.current.style.transform = `scale(${scale})`;
				aboutRef.current.style.zIndex = 1;
				setIframeLoaded(true);
			}, 100);
		}
		// eslint-disable-next-line
	}, [scrollPos]);

	//animation
	const [i, setI] = useState(0);
	const [slidesArr, setSlidesArr] = useState(0);
	const [timer, setTimer] = useState(null);
	const animationRef = useRef(null);

	useEffect(() => {
		if (
			aboutRef.current !== null &&
			animationRef.current !== null &&
			scrollPos > aboutRef.current.getBoundingClientRect().bottom * 3
		) {
			animationRef.current.classList.replace('animation-hidden', 'animation-visible');

			setTimeout(() => {
				animate();
			}, timer);
		}
		// eslint-disable-next-line
	}, [i, slidesArr, scrollPos, animationRef.current]);

	const animate = () => {
		if (slidesArr !== 0 && window.location.pathname.includes('project')) {
			if (i < slidesArr) {
				setI(i + 1);
			}

			if (i === slidesArr - 1 && window.location.pathname.includes('project')) {
				setI(0);
			}
		}
	};

	//stack kit
	const stackKitRef = useRef(null);
	const [time, setTime] = useState(0);
	const [timeouts, setTimeouts] = useState([]);

	//setting timeouts depending on No of techs available for current projects
	//!ATT. as first child if <h2> and we don't want to translate it, we omit this index in below but adding extra time to timeouts array: if (timeouts.length <= el.data.stackKit.length) instead of if (timeouts.length < el.data.stackKit.length)
	useEffect(() => {
		projectsData.forEach((el) => {
			if (el.id === match.params.project) {
				if (timeouts.length <= el.data.stackKit.length) {
					setTime(time + 250);
					return setTimeouts((timeouts) => [...timeouts, time]);
				}
			}
		});
		// eslint-disable-next-line
	}, [time, timeouts]);

	//transforming all project related DIVs to -100% by default (on page load)
	useEffect(() => {
		stackKitRef.current !== null &&
			Array.from(stackKitRef.current.children).forEach((child, index) => {
				//0 index is h2 elem that we don't want to transform
				if (index > 0) child.style.transform = 'translate(-100%)';
			});
		// eslint-disable-next-line
	}, [stackKitRef.current]);

	//translating all project related DIVs back to 0% with different interval of time
	useEffect(() => {
		if (stackKitRef.current !== null)
			scrollPos > stackKitRef.current.getBoundingClientRect().top * 3 &&
				Array.from(stackKitRef.current.children).forEach((child, index) =>
					setTimeout(() => {
						if (index > 0) child.style.transform = 'translateX(0%)';
					}, timeouts[index])
				);
		// eslint-disable-next-line
	}, [stackKitRef.current, scrollPos]);

	const [lighthouseRepClassName, setLighthouseRepClassName] = useState('lighthouseRep-img');
	const lighthouseRepBioRef = useRef(null);

	//setting bio paragraph
	const [bioString, setBioString] = useState([]);

	//array of components, id == <a> innerHTML
	const links = [
		{ id: 'MDN', link: <Mdn key='customKey0' /> },
		{ id: 'OOP', link: <Oop key='customKey1' /> },
		{ id: 'TraversyMedia', link: <TraversyMedia key='customKey2' /> },
		{ id: 'APIs', link: <Api key='customKey3' /> },
		{ id: 'CRUD', link: <Crud key='customKey4' /> },
	];

	useEffect(() => {
		//iterating projectData to choose correct data object
		projectsData.forEach((project) => {
			if (project.id === match.params.project) {
				//split bio string into array
				const words = project.data.bio.split(' ');
				const regex = /[.,/#!$%^&*;:{}=\-_`~()]/g;

				//iterating through arrays of words and links to replace regular strings with <a> component where necessary; we also remove all punctuation from words we want to replace with <a> components
				words.forEach((word) =>
					links.forEach((link) =>
						link.id === word.replace(regex, '')
							? words.splice(words.indexOf(word), 1, link.link)
							: word
					)
				);

				//adding gaps between each word if it is a string and not jsx component
				const bioFinal = words.map((wrd) => (typeof wrd === 'string' ? (wrd += ' ') : wrd));

				//setting state
				setBioString(bioFinal);
			}
		});
		// eslint-disable-next-line
	}, []);

	return projectsData.map((project) => {
		const {
			id,
			data: {
				projectName,
				bgImg,
				animationArr,
				stackKit,
				stackKitBgColor,
				lighthouseRepImgSrc,
				lighthouseRepBio,
				link,
			},
		} = project;

		return (
			id === currentGallery && (
				<div key={id} className='project'>
					<div
						className='preview-shell'
						id='preview-shell'
						style={{ opacity: opacity, transform: `scale(${scale})` }}
					>
						<h2>{projectName} </h2>
						<div
							className='preview'
							style={{ backgroundImage: `url(${bgImg[0]})` }}
						></div>{' '}
						<div className='preview' style={{ backgroundImage: `url(${bgImg[1]})` }}>
							<a
								href={link}
								target='_blank'
								rel='noreferrer'
								className='slider-select'
							>
								{' '}
							</a>
						</div>
					</div>

					<div className='about' id='about' ref={aboutRef}>
						<h2>Why? Or the main idea of this project</h2>
						<p>{[...bioString]} </p>
						{id === 'slider-6' && iframeLoaded && <YoutubeFrame />}
					</div>

					<div
						className='animation animation-hidden'
						id='brief visualisation'
						ref={animationRef}
					>
						<h2>Preview</h2>
						<img
							src={animationArr[i]}
							alt='animation goes here...'
							className='anim-img'
						/>
					</div>

					<div className='stackKit' id='stack' ref={stackKitRef}>
						<h2>Stack</h2>
						{stackKit.map((el, index) => {
							return (
								<div
									key={el}
									className='projects'
									style={{ backgroundColor: stackKitBgColor[index] }}
								>
									<p>{el}</p>
								</div>
							);
						})}
					</div>
					<div className='lighthouseRep' id='lighthouse report'>
						<h2>Lighthouse report</h2>
						<div
							className={lighthouseRepClassName}
							onClick={(e) => {
								setLighthouseRepClassName(
									lighthouseRepClassName === 'lighthouseRep-img'
										? 'zoomedImg'
										: 'lighthouseRep-img'
								);
								lighthouseRepBioRef.current.style.visibility =
									lighthouseRepClassName === 'lighthouseRep-img'
										? 'hidden'
										: 'visible';
							}}
						>
							<img src={lighthouseRepImgSrc} alt='lighthouse report...' />
						</div>
						<div className='lighthouseRep-bio' ref={lighthouseRepBioRef}>
							<p> {lighthouseRepBio} </p>
							<a
								href='https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								What is lighthouse report? Click to know more{' '}
							</a>
						</div>
					</div>
				</div>
			)
		);
	});
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
	scaleSetter: state.scaleSetter,
});

Project.propTypes = {
	setNavlist: PropTypes.func.isRequired,
	scrollPos: PropTypes.number.isRequired,
	scaleSetter: PropTypes.object.isRequired,
	setScale: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setNavlist, setScale })(Project);

//jsx links to replace piece of text they refer to
const Mdn = () => {
	return (
		<Fragment>
			<a
				href='https://developer.mozilla.org/ru/'
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'underline' }}
			>
				MDN
			</a>
			&nbsp;
		</Fragment>
	);
};

const Oop = () => {
	return (
		<Fragment>
			<a
				href='https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP'
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'underline' }}
			>
				OOP
			</a>
			&nbsp;
		</Fragment>
	);
};

const TraversyMedia = () => {
	return (
		<Fragment>
			<a
				href='https://www.traversymedia.com/'
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'underline' }}
			>
				TraversyMedia
			</a>
			&nbsp;
		</Fragment>
	);
};

const Api = () => {
	return (
		<Fragment>
			<a
				href='https://en.wikipedia.org/wiki/API'
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'underline' }}
			>
				APIs
			</a>
			&nbsp;
		</Fragment>
	);
};

const Crud = () => {
	return (
		<Fragment>
			<a
				href='https://en.wikipedia.org/wiki/Create,_read,_update_and_delete'
				target='_blank'
				rel='noreferrer'
				style={{ textDecoration: 'underline' }}
			>
				CRUD
			</a>
			&nbsp;
		</Fragment>
	);
};
