import { useSelector } from 'react-redux';

function Pics() {
	const { data } = useSelector((store) => store.flickr);
	return (
		<main id='pics' className='myScroll'>
			<h1>Pics</h1>
			{data.map((pic, idx) => {
				if (idx >= 5) return;
				return (
					<img
						key={idx}
						src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
						alt={pic.title}
					/>
				);
			})}
		</main>
	);
}

export default Pics;
