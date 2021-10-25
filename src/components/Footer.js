import React from 'react';
import githubLogo from './assets/Icns/github-brands.svg';
import telegramLogo from './assets/Icns/telegram-brands.svg';

export const Footer = () => {
	return (
		<footer id='footer'>
			<a href='https://github.com/maxganiev' target='_blank' rel='noreferrer'>
				<img src={githubLogo} className='icn' alt='github badge' />
			</a>

			<a href='https://t.me/maxganiev' target='_blank' rel='noreferrer'>
				<img src={telegramLogo} className='icn' alt='telegram badge' />
			</a>
		</footer>
	);
};
