import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Ajax = ({ scrollPos, scaleSetter }) => {
	const [formData, setFormData] = useState({});
	const [scale, setScale] = useState(0);

	useEffect(() => {
		const scrolled = scrollPos / document.documentElement.clientHeight / scaleSetter.scaleSetter.d;

		if (scrollPos > document.documentElement.clientHeight * scaleSetter.scaleSetter.f) {
			setScale(scrolled <= 0.99 ? scrolled : 1);
		}
		// eslint-disable-next-line
	}, [scrollPos]);

	const formRef = useRef(null);
	const onChange = (e) => {
		e.preventDefault();
		Array.from(formRef.current.children).forEach((child) =>
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
				_subject: 'Новое уведомление с сайта',
			})
		);
	};

	const [alert, setAlert] = useState({ data: '', bgColor: '' });

	const onSubmit = async (e) => {
		e.preventDefault();

		if (
			Array.from(formRef.current.children).some(
				(child) => child.value === '' && child.type !== 'tel'
			)
		) {
			setAlert({
				data: 'Please fill all fields',
				bgColor: 'red',
			});

			Array.from(formRef.current.children).forEach(
				(child, index) =>
					(child.style.border =
						index !== 2 && index !== 4 ? '1.5px red solid' : '0.2px #000 solid')
			);

			setTimeout(() => {
				setAlert({});

				Array.from(formRef.current.children).forEach(
					(child) => (child.style.border = '0.2px #000 solid')
				);
			}, 1600);
		} else {
			const request = await fetch('https://formsubmit.co/ajax/max.ganiev1908@gmail.com', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			Array.from(formRef.current.children).forEach((child) => {
				child.value = '';
				child.style.border = '0.2px #000 solid';
				setFormData({});
			});

			setAlert({
				data: 'Thanks! Your message has been successfully sent out',
				bgColor: '#1ee653',
			});
			setTimeout(() => {
				setAlert({});
			}, 2500);

			request.status !== 200 &&
				setAlert({
					data: 'There is a problem with sending the data, please try again later...',
					bgColor: 'red',
				});
			setTimeout(() => {
				setAlert({});
			}, 2500);
		}
	};

	return (
		<div className='form-wrapper' id='send message' style={{ transform: `scale(${scale})` }}>
			<div
				className='alert'
				style={{
					backgroundColor: alert.bgColor,
					textAlign: 'center',
					transition: 'all 0.6s ease-in-out',
					position: 'absolute',
					top: '0',
					width: '100%',
					height: '10%',
				}}
			>
				{' '}
				<p> {alert.data} </p>{' '}
			</div>
			<form className='form' onSubmit={onSubmit} ref={formRef} onChange={onChange}>
				<input type='text' placeholder='Enter your name' name='name' />
				<input type='email' placeholder='Your email' name='email' />
				<input type='tel' placeholder='Phone number' name='tel' />
				<textarea name='msg' placeholder='Leave me a message...' />
				<input type='submit' className='btn-submit' value='Send message' />
			</form>
		</div>
	);
};

Ajax.propTypes = {
	scrollPos: PropTypes.number.isRequired,
	scaleSetter: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	scrollPos: state.scroller.scrollPos,
	scaleSetter: state.scaleSetter,
});

export default connect(mapStateToProps)(Ajax);
