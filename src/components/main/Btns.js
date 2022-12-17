import { useRef, useEffect } from 'react';

function Btns() {
	const pos = useRef([]);
	const btnRef = useRef(null);

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -window.innerHeight / 2;
		const btns = btnRef.current.children;
		const scroll = window.scrollY;

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
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
			<li className='on'></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	);
}

export default Btns;
