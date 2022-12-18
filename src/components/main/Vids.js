import { useSelector } from 'react-redux';

function Vids() {
	const { youtube } = useSelector((store) => store.youtubeReducer);

	return (
		<main id='vids' className='myScroll'>
			<h1>Vids</h1>
			<div>
				{youtube.map((vid, idx) => {
					if (idx >= 2) return;
					return (
						<article key={idx}>
							<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
						</article>
					);
				})}
			</div>
		</main>
	);
}

export default Vids;
