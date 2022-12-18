import Layout from '../common/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { setMembers } from '../../redux/action';

function Department() {
	const path = process.env.PUBLIC_URL;
	const dispatch = useDispatch();
	const Member = useSelector((store) => store.memberReducer.members);

	return (
		<Layout name={'Department'}>
			<button
				onClick={() => {
					const newMember = [...Member];
					newMember[0].pic = 'member6.jpg';
					dispatch(setMembers(newMember));
				}}
			>
				change member
			</button>
			<br />

			{Member.map((data, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${path}/img/${data.pic}`} alt={data.name} />
							</div>
							<h3>{data.name}</h3>
							<p>{data.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
