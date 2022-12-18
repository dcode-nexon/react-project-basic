import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Menu from './Menu';

function Header({ type }) {
	const menu = useRef(null);
	const btnToggle = useRef(null);
	const active = { color: 'aqua' };
	return (
		<header className={type}>
			<div className='inner'>
				<h1>
					<Link to='/'>DCODELAB</Link>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/member' activeStyle={active}>
							Member
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Location
						</NavLink>
					</li>
				</ul>

				{/* <FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} /> */}
				<div
					ref={btnToggle}
					className='toggle'
					onClick={(e) => {
						e.target.classList.toggle('close');
						menu.current.toggle();
					}}
				>
					<span>모바일 메뉴 토글버튼</span>
				</div>
			</div>

			<Menu ref={menu} btnToggle={btnToggle} />
		</header>
	);
}

export default Header;
