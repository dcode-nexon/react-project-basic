import { useSelector } from 'react-redux';

function Footer() {
	const { data } = useSelector((store) => store.members);
	return (
		<footer>
			<div className='inner'>
				<p>2023 Nexon Dcode &copy; All rights reserved.</p>
				<ul>
					{data.map((member, idx) => {
						if (idx >= 2) return;
						return <li key={idx}>{member.name}</li>;
					})}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
