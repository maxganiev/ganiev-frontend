import { useEffect } from 'react';
import Paralax from '../components/effects/Paralax';
import Projects from '../components/projects/Projects';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNavlist } from '../actions/navContentAction';
import { setScale } from '../actions/scaleSetterAction';
import { Welcome } from '../components/Welcome';

const Home = ({ setNavlist, setScale, scaleSetter }) => {
	useEffect(() => {
		setNavlist(['bio', 'projects', 'send message']);

		//set scale by adjusting denominator and factor for form-wrapper transform (Ajax component); init values of scaleSetter obj are null, so the condition above tells React to update component only while scalleSetter values are null (which means only once);
		//while navigating between project page and home, scaleSetter value is remembered so we need to manually re-set it
		Object.values(scaleSetter.scaleSetter).some((val, index, arr) =>
			val === null
				? setScale({ d: 2.8, f: 2 })
				: arr[0] === 3.6 && arr[1] === 3
				? setScale({ d: 2.8, f: 2 })
				: null
		);
		// eslint-disable-next-line
	}, [scaleSetter]);

	return (
		<div className='home'>
			<Welcome />
			<Paralax />
			<Projects />
		</div>
	);
};

Home.propTypes = {
	setNavlist: PropTypes.func.isRequired,
	scaleSetter: PropTypes.object.isRequired,
	setScale: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	scaleSetter: state.scaleSetter,
});

export default connect(mapStateToProps, { setNavlist, setScale })(Home);
