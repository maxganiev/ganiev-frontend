//arts portfolio
import artsPrw0 from '../assets/Imgs/preview/artsPort/0.png';
import artsPrw1 from '../assets/Imgs/preview/artsPort/1.png';
//animation
import artsAnim0 from '../assets/Imgs/animation/artsPort/0.png';
import artsAnim1 from '../assets/Imgs/animation/artsPort/1.png';
import artsAnim2 from '../assets/Imgs/animation/artsPort/2.png';
import artsAnim3 from '../assets/Imgs/animation/artsPort/3.png';
//lighthouse report
import artsLhReportImg from '../assets/Imgs/lighthouse/artsPort/lh.png';

//homepage
import homepagePrw0 from '../assets/Imgs/preview/homepage/0.png';
import homepagePrw1 from '../assets/Imgs/preview/homepage/1.png';
//animation
import homepageAnim0 from '../assets/Imgs/animation/homepage/0.png';
import homepageAnim1 from '../assets/Imgs/animation/homepage/1.png';
//lighthouse report
import homepageLhReportImg from '../assets/Imgs/lighthouse/homepage/lh.png';

//air freight calculator
import freightCalcPrw0 from '../assets/Imgs/preview/freightCalc/0.png';
import freightCalcPrw1 from '../assets/Imgs/preview/freightCalc/1.png';
//animation
import freightCalcAnim0 from '../assets/Imgs/animation/freightCalc/0.png';
import freightCalcAnim1 from '../assets/Imgs/animation/freightCalc/1.png';
import freightCalcAnim2 from '../assets/Imgs/animation/freightCalc/2.png';
import freightCalcAnim3 from '../assets/Imgs/animation/freightCalc/3.png';
//lighthouse report
import freightCalcLhReportImg from '../assets/Imgs/lighthouse/freightCalc/lh.png';

//instaPoster
// import instaPosterPrw0 from '../assets/Imgs/preview/instaPoster/0.png';
// import instaPosterPrw1 from '../assets/Imgs/preview/instaPoster/1.png';
// //animation
// import instaPosterAnim0 from '../assets/Imgs/animation/instaPoster/0.png';
// import instaPosterAnim1 from '../assets/Imgs/animation/instaPoster/1.png';
// import instaPosterAnim2 from '../assets/Imgs/animation/instaPoster/2.png';
// import instaPosterAnim3 from '../assets/Imgs/animation/instaPoster/3.png';
// import instaPosterAnim4 from '../assets/Imgs/animation/instaPoster/4.png';
// import instaPosterAnim5 from '../assets/Imgs/animation/instaPoster/5.png';
// import instaPosterAnim6 from '../assets/Imgs/animation/instaPoster/6.png';
// //lighthouse report
// import instaPosterReportImg from '../assets/Imgs/lighthouse/instaPoster/lh.png';

//stack bg-color:
const bgGray = 'rgba(250,250,250,0.3)';
const bgBlue = 'rgb(142, 175, 209)';
const bgPastel = 'rgb(230, 189, 149)';
const bgWhite = 'rgb(255, 255, 255)';

export const projectsData = [
	{
		id: 'slider-1',
		data: {
			projectName: '2D artist portfolio',
			bgImg: [artsPrw0, artsPrw1],
			bio: `Simple website - portfolio for the 2D artist. Design was done completely in accordance to the Client's wishes. The idea was to sort all pictures into different galleries depending on type, and then each gallery's content should have been accessible against click. Instead of statically placed grid of containers, I proposed to use animated carousel-like model. Click the link above to check out her awesome arts. If you seek for any raster or verctor pictures for your needs - I definitely suggest you to check her services in action.`,
			animationArr: [artsAnim0, artsAnim1, artsAnim2, artsAnim3],
			timer: 1200,
			stackKit: ['HTML5', 'CSS3', 'Javascript'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel],
			lighthouseRepImgSrc: artsLhReportImg,
			lighthouseRepBio: `Figures are telling for themselves. The site is fast-to-load due to image uploading optimization, avoidance of using blocking scripts etc. It is mobile friendly and cross-browser, as most of other sites I built. `,
			link: 'https://artistganieva.netlify.app/',
		},
	},

	{
		id: 'slider-2',
		data: {
			projectName: 'LCL freight calculator',
			bgImg: [freightCalcPrw0, freightCalcPrw1],
			bio: `Nice calculator made for logistics business to calculate air and rail freight charges (including local export and import expenses) built using module JS in clean OOP code.`,
			animationArr: [freightCalcAnim0, freightCalcAnim1, freightCalcAnim2, freightCalcAnim3],
			timer: 1200,
			stackKit: ['HTML5', 'SCSS & Bootstrap', 'Javascript (OOP)', 'SMTP', 'NodeJS'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel, bgWhite, bgPastel],
			lighthouseRepImgSrc: freightCalcLhReportImg,
			lighthouseRepBio: `Top rates per performance and usability. SEO optimization has never been executed as it hadn't been required for this specific project - the site was aimed to use by the company's employees only.`,
			link: 'https://lcl-freight-calc.herokuapp.com/',
		},
	},

	{
		id: 'slider-3',
		data: {
			projectName: 'Dynamically updated homepage for a browser',
			bgImg: [homepagePrw0, homepagePrw1],
			bio: 'I built this page completely for personal needs. I once saw something similar while watching online tutorials by TraversyMedia - he had similar home page in his Chrome browser. The page is completely dynamic - the only static element here is clock, the rest data is supplied by a number of third-party APIs. Hit the link above to see it live - maybe you desire to set it as your home page also :)',
			animationArr: [homepageAnim0, homepageAnim1],
			timer: 2000,
			stackKit: ['HTML5', 'CSS3', 'Javascript'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel],
			lighthouseRepImgSrc: homepageLhReportImg,
			lighthouseRepBio: `The reason for the lighthouse report being horrible here is that the whole page is built with data supplied by multiple APIs. Static page by default is almost empty - it has nothing except pre-configured layout. Other data, like weather, geoposition, etc., even fonts are requested from third-party providers, then assembled and rendered. However, despite seem frustrating report, the page loads and is rendered almost immediately, mostly because of a tiny sizes of data chunks being received.`,
			link: 'https://apihomepage.netlify.app/',
		},
	},

	// {
	// 	id: 'slider-6',
	// 	data: {
	// 		projectName: 'InstaPoster',
	// 		bgImg: [instaPosterPrw0, instaPosterPrw1],
	// 		bio: 'This is my favourite site, despite it is very straightforward and ordinary-looking. My mom is a psychologist that works with their patients both off and online. She was struggling with making a decent-looking profile in Instagram : as she had no much knowledge about basics of design, and most of photo edit apps were to complicated for her, her publications looked mostly horrible - low-quality and disproportioned photos with hardly readable bunch of text on them. I came up with idea to build something really simple and intuitevelly clear in usage. Check the video below that best of all describes my intensions.',
	// 		animationArr: [
	// 			instaPosterAnim0,
	// 			instaPosterAnim1,
	// 			instaPosterAnim2,
	// 			instaPosterAnim3,
	// 			instaPosterAnim4,
	// 			instaPosterAnim5,
	// 			instaPosterAnim6,
	// 		],
	// 		timer: 1200,
	// 		stackKit: ['HTML5', 'CSS3', 'Javascript', 'HTML5 Canvas'],
	// 		stackKitBgColor: [bgGray, bgBlue, bgPastel, bgWhite],
	// 		lighthouseRepImgSrc: instaPosterReportImg,
	// 		lighthouseRepBio: `Top rate per performance. SEO optimization wasn't needed, and accessibility was rated low as the site is really difficult or impossible to be used by people with limited abilities`,
	// 		link: 'https://instaposter.netlify.app/',
	// 	},
	// },
];
