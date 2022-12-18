import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
	const { youtube } = useSelector((store) => store.youtubeReducer);

	return (
		<main id='vids' className='myScroll'>
			<h1>Vids</h1>
			<Swiper
				modules={[Pagination, Navigation]}
				pagination={{ clickable: true }}
				navigation={true}
				slidesPerView={4}
				spaceBetween={0}
				loop={true}
			>
				{youtube.map((vid, idx) => {
					if (idx >= 5) return;
					return (
						<SwiperSlide key={idx}>
							<div className='inner'>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
								</div>
								<p>{vid.snippet.title}</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</main>
	);
}

export default Vids;
