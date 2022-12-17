import { useRef, useEffect } from 'react';
import Anime from '../../asset/Anime';

function Btns({ setScrolled, setPos }) {
	const pos = useRef([]);
	const btnRef = useRef(null);
	const num = 4;
	const speed = 500;

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setPos(pos.current);
	};

	const activation = () => {
		const base = -window.innerHeight / 4;
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		const scroll = window.scrollY;
		setScrolled(scroll);

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		btnRef.current.children[0].classList.add('on');
		btnRef.current.parentElement.querySelectorAll('.myScroll')[0].classList.add('on');
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(num)
				.fill()
				.map((_, idx) => (
					<li
						key={idx}
						onClick={() => {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[idx],
								duration: speed,
							});
						}}
					></li>
				))}
		</ul>
	);
}

export default Btns;
