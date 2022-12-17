import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
		</main>
	);
}

export default Main;
