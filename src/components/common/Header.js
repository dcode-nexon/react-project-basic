import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
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
			</div>
		</header>
	);
}

export default Header;
