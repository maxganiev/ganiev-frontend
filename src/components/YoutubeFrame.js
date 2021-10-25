import React from 'react';

export const YoutubeFrame = () => {
	return (
		<iframe
			className='yt-iframe'
			src='https://www.youtube.com/embed/EiKK04Ht8QI?showinfo=0&modestbranding=1&autohide=1&showinfo=0&controls=1'
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		/>
	);
};
