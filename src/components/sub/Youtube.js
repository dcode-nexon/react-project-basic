import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
	const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	const [Vids, setVids] = useState([]);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{Vids.map((data) => {
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
						<div className='pic'>
							<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
