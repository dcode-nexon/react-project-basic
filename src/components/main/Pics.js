import { useSelector } from 'react-redux';

function Pics() {
	const { flickr } = useSelector((store) => store.flickrReducer);

	return (
		<main id='pics' className='myScroll'>
			<h1>Pics</h1>

			{flickr.map((pic, idx) => {
				if (idx >= 4) return;
				return (
					<div className='pic' key={idx}>
						<img
							src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
							alt={pic.title}
						/>
					</div>
				);
			})}
		</main>
	);
}

export default Pics;
