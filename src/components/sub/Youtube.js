import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from '../../redux/action';
import Modal from '../common/Modal';

function Youtube() {
	const dispatch = useDispatch();
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const modal = useRef(null);
	const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
	const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	const [Index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			dispatch(setYoutube(json.data.items));
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids?.map((data, idx) => {
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
									modal.current.open();
									setIndex(idx);
								}}
							>
								<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
							</div>
						</article>
					);
				})}
			</Layout>

			<Modal ref={modal}>
				<iframe
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
