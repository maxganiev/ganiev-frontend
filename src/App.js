import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Scroller from './components/effects/Scroller';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './components/projects/Project';
import Ajax from './components/Ajax';
import { Footer } from './components/Footer';
import ParalaxShell from './components/effects/ParalaxShell';

import './App.css';
import './Mobile.css';

export const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<ParalaxShell />
					<Navbar />
					<Scroller />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/project/:project' component={Project} />
					</Switch>
					<Ajax />
					<Footer />
				</div>
			</Router>
		</Provider>
	);
};
