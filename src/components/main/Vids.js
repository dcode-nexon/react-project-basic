import { useSelector } from 'react-redux';

function Vids() {
	const { data } = useSelector((store) => store.youtube);

	return (
		<main id='vids' className='myScroll'>
			<h1>Vids</h1>

			{data.map((vid, idx) => {
				if (idx >= 2) return;
				return <img key={idx} src={vid.snippet.thumbnails.standard.url} />;
			})}
		</main>
	);
}

export default Vids;
