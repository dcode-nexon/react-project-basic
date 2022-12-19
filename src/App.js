import { Route, Switch } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/Main';

import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Member from './components/sub/Member';
import Location from './components/sub/Location';
import './scss/style.scss';
import * as types from './redux/actionType';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.MEMBERS.start });
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.FLICKR.start, Opt: { type: 'user', user: '164021883@N04' } });
	}, []);

	return (
		<>
			{/* main */}
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/member' component={Member} />
			<Route path='/location' component={Location} />

			<Footer />
		</>
	);
}

export default App;
