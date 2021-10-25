import React, { useState, useEffect, useRef } from 'react';
import chevronLeft from './assets/Icns/chevron-left-solid.svg';
import chevronRight from './assets/Icns/chevron-right-solid.svg';

export const Benefits = () => {
	const benefits = [
		` 100% satisfaction: it's your project, and you are the
    boss; whatever your wishes/ requirements are - they will be fully
    delivered in accordance to a preliminarily project specification*
    that we have created together`,

		`100% honesty: despite it may seem simple, web development is rather complicated process with huge set of technologies available; however, I get to business only if I am completely sure I will be able to deliver what I was asked for; if I know current task is out of my specialty, at least for now - I inform a client accordingly and never take such a project`,

		`100% involvement: we work together to achieve best result, that is: your site has to meet your demands and live up all expectations; if it doesn't - we keep going`,

		`100% of your website design is customizable: we are able to modify alsmost whatever you want, and this is an undeniable
    advantage before CMS like Wordpress or site builders similar to
    Tilda - your site will look exactly the way you want it to`,

		`100% reliability: in such a complicated area as IT, it is
    often quite difficult to find a reliable partner to have your job
    done properly; however, you can be absolutely calm - my sites have a lifetime
    guarantee**, so should you come across any issues in future - I will
    fix them without any additional fees`,

		`100% passion: more experience is almost always treated as
    more reliability, and often it is true; however, lots of 'veteran'
    developers might have burned out or slightly lost their interest as
    they have been doing this business for many years. My professional
    experience may be less than that 10 years of a senior developer, but
    I am very passionate and concerned to deliver best practicies and
    top satisfaction to my clients`,

		`100% clean code: if in future you want to add more features (say, to make a rebranding), but for some reason decide to apply for another developer, he will manage to perform this without any issues - your site is written in readable, clean and well commented code; often new developers are forced to build whole project from very scratch, but this is obviously not the case`,
	];

	const [index, setIndex] = useState(0);

	const slideRight = () => {
		index < benefits.length - 1 ? setIndex(index + 1) : setIndex(0);
	};

	const slideLeft = () => {
		index === 0 ? setIndex(benefits.length - 1) : setIndex(index - 1);
	};

	const [benefitsFirstElem, setBenefitsFirstElem] = useState(benefits.slice(index, index + 1)[0]);
	const benefitDescrRef = useRef(null);

	useEffect(() => {
		setBenefitsFirstElem(benefits.slice(index, index + 1)[0]);
		// eslint-disable-next-line
	}, [index]);

	useEffect(() => {
		if (benefitDescrRef.current !== null) {
			benefitsFirstElem.includes('*')
				? benefitDescrRef.current.classList.add('attention-note')
				: benefitDescrRef.current.classList.remove('attention-note');
		}
	}, [benefitsFirstElem]);

	return (
		<div className='benefits'>
			<div className='controls'>
				<img src={chevronLeft} alt='chevron-left' className='icn' onClick={slideLeft} />
				<img src={chevronRight} alt='chevron-right' className='icn' onClick={slideRight} />
			</div>

			<div className='benefit-description' ref={benefitDescrRef}>
				<b> If we take this journey together, your undoubted benefits will be: </b>
				<br /> <br />
				<b> {benefits[index].slice(0, benefits[index].indexOf(':') + 1)} </b>{' '}
				<span>{benefits[index].slice(benefits[index].indexOf(':') + 1)}</span>
			</div>
		</div>
	);
};
