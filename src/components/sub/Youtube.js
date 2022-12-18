import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';

function Youtube() {
	const { youtube } = useSelector((store) => store.youtubeReducer);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<Layout name={'Youtube'}>
				{youtube.map((data, idx) => {
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
					src={`https://www.youtube.com/embed/${youtube[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
