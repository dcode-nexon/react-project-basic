import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);

	//지도 기본 위치및 확대레벨 정보
	const option = {
		center: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
		level: 3,
	};

	//마커의 위치 인스턴스
	const markerPosition = new kakao.maps.LatLng(37.40211707077346, 127.10344953763003);

	//마커 이미지 정보
	const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
	const imageSize = new kakao.maps.Size(232, 99);
	const imageOption = { offset: new kakao.maps.Point(116, 99) };

	//마커 이미지 인스턴스 생성
	const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

	//마커 인스턴스 생성
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
