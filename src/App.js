import { Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';
import Content from './components/main/Content';
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Member from './components/sub/Member';
import Location from './components/sub/Location';
import './scss/style.scss';

function App() {
	return (
		<>
			<Header />

			{/* main */}
			<Route exact path='/'>
				<Visual />
				<Content />
			</Route>

			{/* sub */}
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
