import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

function Department() {
	const path = process.env.PUBLIC_URL;
	const Member = useSelector((store) => store.memberReducer.members);

	return (
		<Layout name={'Department'}>
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
