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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube } from './redux/action';
import axios from 'axios';

function App() {
	const dispatch = useDispatch();

	const getYoutube = () => {
		const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
		const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	useEffect(() => {
		getYoutube();
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
