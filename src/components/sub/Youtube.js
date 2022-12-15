import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../common/Modal';

function Youtube() {
	const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
	const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((data, idx) => {
					const tit = data.snippet.title;
					const desc = data.snippet.description;
					const date = data.snippet.publishedAt;

					return (
						<article key={data.id}>
							<h3>{tit.length > 30 && tit.substr(0, 30) + '...'}</h3>
							<div className='txt'>
								<p>{desc.length > 100 && desc.substr(0, 100) + '...'}</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div
								className='pic'
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}
							>
								<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
							</div>
						</article>
					);
				})}
			</Layout>

			{Open && (
				<Modal setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
					></iframe>
				</Modal>
			)}
		</>
	);
}

export default Youtube;
