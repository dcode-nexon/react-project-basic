import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const dispatch = useDispatch();
	const myId = '164021883@N04';
	const masonryOptions = { transitionDuration: '0.5s' };
	const frame = useRef(null);
	const input = useRef(null);
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const [Opt, setOpt] = useState({ type: 'user', user: myId });
	const [Loading, setLoading] = useState(true);
	const [Index, setIndex] = useState(0);
	const modal = useRef(null);

	const showSearch = () => {
		const result = input.current.value.trim();
		input.current.value = '';
		if (!result) return alert('검색어를 입력하세요.');
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'search', tags: result });
	};

	const showMine = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		setOpt({ type: 'user', user: myId });
	};

	const showInterest = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		setOpt({ type: 'interest' });
	};

	const showUser = (e) => {
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'user', user: e.target.innerText });
	};

	useEffect(() => {
		dispatch({ type: types.FLICKR.start, Opt });
	}, [Opt]);

	useEffect(() => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
	}, [Items]);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='controls'>
					<div className='searchBox'>
						<input
							type='text'
							ref={input}
							placeholder='검색어를 입력하세요.'
							onKeyUp={(e) => e.key === 'Enter' && showSearch()}
						/>
						<button onClick={showSearch}>Search</button>
					</div>

					<nav>
						<button onClick={showInterest}>Interest Gallery</button>
						<button onClick={showMine}>My Gallery</button>
					</nav>
				</div>

				{Loading && <img className='loading' src={`${process.env.PUBLIC_URL}/img/loading.gif`} />}
				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Items.map((item, idx) => {
							return (
								<article key={item.id}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												modal.current.open();
												setIndex(idx);
											}}
										>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>
										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) =>
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													)
												}
											/>
											<span onClick={showUser}>{item.owner}</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
