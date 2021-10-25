//snakeGame page
//preview
import picSnake0 from '../assets/Imgs/preview/snakeGame/1.png';
import picSnake1 from '../assets/Imgs/preview/snakeGame/3.png';
//animation
import snakeGameSlider0 from '../assets/Imgs/animation/snakeGame/0.png';
import snakeGameSlider1 from '../assets/Imgs/animation/snakeGame/1.png';
import snakeGameSlider2 from '../assets/Imgs/animation/snakeGame/2.png';
import snakeGameSlider3 from '../assets/Imgs/animation/snakeGame/3.png';
import snakeGameSlider4 from '../assets/Imgs/animation/snakeGame/4.png';
import snakeGameSlider5 from '../assets/Imgs/animation/snakeGame/5.png';
import snakeGameSlider6 from '../assets/Imgs/animation/snakeGame/6.png';
import snakeGameSlider7 from '../assets/Imgs/animation/snakeGame/7.png';
import snakeGameSlider8 from '../assets/Imgs/animation/snakeGame/8.png';
import snakeGameSlider9 from '../assets/Imgs/animation/snakeGame/9.png';
//lighthouse report
import snakeGameLhReportImg from '../assets/Imgs/lighthouse/snakeGame/lhRep.png';

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

//contact manager
import contactManagerPrw0 from '../assets/Imgs/preview/contactManager/0.png';
import contactManagerPrw1 from '../assets/Imgs/preview/contactManager/1.png';
//animation
import contactManagerAnim0 from '../assets/Imgs/animation/contactManager/0.png';
import contactManagerAnim1 from '../assets/Imgs/animation/contactManager/1.png';
import contactManagerAnim2 from '../assets/Imgs/animation/contactManager/2.png';
import contactManagerAnim3 from '../assets/Imgs/animation/contactManager/3.png';
//lighthouse report
import contactManagerReportImg from '../assets/Imgs/lighthouse/contactManager/lh.png';

//instaPoster
import instaPosterPrw0 from '../assets/Imgs/preview/instaPoster/0.png';
import instaPosterPrw1 from '../assets/Imgs/preview/instaPoster/1.png';
//animation
import instaPosterAnim0 from '../assets/Imgs/animation/instaPoster/0.png';
import instaPosterAnim1 from '../assets/Imgs/animation/instaPoster/1.png';
import instaPosterAnim2 from '../assets/Imgs/animation/instaPoster/2.png';
import instaPosterAnim3 from '../assets/Imgs/animation/instaPoster/3.png';
import instaPosterAnim4 from '../assets/Imgs/animation/instaPoster/4.png';
import instaPosterAnim5 from '../assets/Imgs/animation/instaPoster/5.png';
import instaPosterAnim6 from '../assets/Imgs/animation/instaPoster/6.png';
//lighthouse report
import instaPosterReportImg from '../assets/Imgs/lighthouse/instaPoster/lh.png';

//stack bg-color:
const bgGray = 'rgba(250,250,250,0.3)';
const bgBlue = 'rgb(142, 175, 209)';
const bgPastel = 'rgb(230, 189, 149)';
const bgWhite = 'rgb(255, 255, 255)';

export const projectsData = [
	{
		id: 'slider-1',
		data: {
			projectName: 'Snake game',
			bgImg: [picSnake0, picSnake1],
			bio: `This was my first childish "project" I have accomplished upon completion of basic design and JavaScript programming course by widely known MDN. I got more or less confident about my skills in programming and decided to make something real and interactive. When was a kid, I used to love playing a snake game on my tetris and later - on a small keypad Nokia. So I basically decided to re-create this good old school video game using technical set of tools I had recently gain. HTML5 canvas animation in scope with basic applience of never dying OOP principles - hit the link above to check it out and to have some fun!`,
			animationArr: [
				snakeGameSlider0,
				snakeGameSlider1,
				snakeGameSlider2,
				snakeGameSlider3,
				snakeGameSlider4,
				snakeGameSlider5,
				snakeGameSlider6,
				snakeGameSlider7,
				snakeGameSlider8,
				snakeGameSlider9,
			],
			timer: 300,
			stackKit: ['HTML5', 'CSS3', 'Javascript (OOP)', 'HTML5 Canvas'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel, bgWhite],
			lighthouseRepImgSrc: snakeGameLhReportImg,
			lighthouseRepBio: `Google report data may seem ambiguous, mainly because of fairly poor accessibility and SEO rates. And while the reasons for the former mainly consisted in not much significant deviations from regulations that Google carefully follow (ex., img tags had no alt attributes), SEO optimization had never been performed as this site had been developed just for a sake of educational purposes and also for  entertainment. Most of attention here was attended to performance - as you may see, it is almost 100%.`,
			link: 'https://snakegame-js-mganiev.netlify.app/',
		},
	},

	{
		id: 'slider-2',
		data: {
			projectName: '2D artist portfolio',
			bgImg: [artsPrw0, artsPrw1],
			bio: `This website was made for 2D artist . A customer wished to have a simple, accessible and interactive platform to demonstrate a portfolio of raster images. The idea was to sort all pictures into different galleries depending on type, and then each gallery's content should have been accessible against click. Instead of statically placed grid of containers, I proposed to use animated carousel-like model. The client liked the idea, and I successfully delivered it. The whole project was customized in accordance to the artist's wishes - colors, font sizes, sectors placement etc. Click the link above to check out her awesome arts. If you seek for any raster or verctor pictures for your needs - I definitely suggest you to check her services in action.`,
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
		id: 'slider-3',
		data: {
			projectName: 'Air freight calculator',
			bgImg: [freightCalcPrw0, freightCalcPrw1],
			bio: `This app was ordered by Russian company responsible for air logistics business. My friend who worked for that company once complained me that the company had been forcing him and his colleagues -   logistics clerks - to spend quite a bunch of time to calculate air freights charges per requests of their actual and potential customers, with only around 25% of all inquiries have been turning into real orders. I came up with idea to build a very simple app to automatize the process and proposed this solution to my friend's boss. The boss approved the idea, and in a couple of days the application was ready. In fact, lots of routine job, at least in Russia, is still handled by office clerks either manually or using old school Excel. Sometimes it needs so few to save time of your empoyees for much more important and valuable task, and consequently cutting on expenses!`,
			animationArr: [freightCalcAnim0, freightCalcAnim1, freightCalcAnim2, freightCalcAnim3],
			timer: 1200,
			stackKit: ['HTML5', 'CSS3', 'Javascript (OOP)'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel],
			lighthouseRepImgSrc: freightCalcLhReportImg,
			lighthouseRepBio: `Top rates per performance and usability. SEO optimization has never been executed as it hadn't been required for this specific project - the site was aimed to use by the company's employees only.`,
			link: 'https://freightcalc.netlify.app/',
		},
	},

	{
		id: 'slider-4',
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

	{
		id: 'slider-5',
		data: {
			projectName: 'Contact manager App',
			bgImg: [contactManagerPrw0, contactManagerPrw1],
			bio: `The site name tells for itself - this is a phonebook to store your contacts. It is a  CRUD fullstack application that allows you to register, perform authentication, add, edit, remove and search your contacts. It is here for demonstration purposes only - if you need your website to have authentication and access to database for storing your data - it can also be performed.`,
			animationArr: [
				contactManagerAnim0,
				contactManagerAnim1,
				contactManagerAnim2,
				contactManagerAnim3,
			],
			timer: 1200,
			stackKit: ['HTML5', 'CSS3', 'ReactJS + Redux', 'NodeJS (Express)', 'MongoDB'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel, bgWhite, bgBlue],
			lighthouseRepImgSrc: contactManagerReportImg,
			lighthouseRepBio: `Performance is far from ideal, mostly because of blocking scripts supplying fonts and icons from third-party servers. It also has low accessibility and SEO rates. However, this site was built mostly for demonstration purposes, and detailed optimization has never been performed.`,
			link: 'https://contactmanager-gm.herokuapp.com/',
		},
	},

	{
		id: 'slider-6',
		data: {
			projectName: 'InstaPoster',
			bgImg: [instaPosterPrw0, instaPosterPrw1],
			bio: 'This is my favourite site, despite it is very straightforward and ordinary-looking. My mom is a psychologist that works with their patients both off and online. She was struggling with making a decent-looking profile in Instagram : as she had no much knowledge about basics of design, and most of photo edit apps were to complicated for her, her publications looked mostly horrible - low-quality and disproportioned photos with hardly readable bunch of text on them. I came up with idea to build something really simple and intuitevelly clear in usage. Check the video below that best of all describes my intensions.',
			animationArr: [
				instaPosterAnim0,
				instaPosterAnim1,
				instaPosterAnim2,
				instaPosterAnim3,
				instaPosterAnim4,
				instaPosterAnim5,
				instaPosterAnim6,
			],
			timer: 1200,
			stackKit: ['HTML5', 'CSS3', 'Javascript', 'HTML5 Canvas'],
			stackKitBgColor: [bgGray, bgBlue, bgPastel, bgWhite],
			lighthouseRepImgSrc: instaPosterReportImg,
			lighthouseRepBio: `Top rate per performance. SEO optimization wasn't needed, and accessibility was rated low as the site is really difficult or impossible to be used by people with limited abilities`,
			link: 'https://instaposter.netlify.app/',
		},
	},
];
