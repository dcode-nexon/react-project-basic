import { useSelector } from 'react-redux';

function Footer() {
	const Member = useSelector((store) => store.memberReducer.members);

	return (
		<footer>
			<div className='inner'>
				<p>2023 Nexon Dcode &copy; All rights reserved.</p>

				<ul className='member'>
					{Member.map((member, idx) => {
						if (idx >= 4) return;
						return (
							<li key={idx}>
								<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} />
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
