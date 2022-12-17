import { useState, useEffect } from 'react';

function News({ Scrolled, currentPos }) {
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'The standard Lorem Ipsum passage.',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			},
			{
				title: '1914 translation by H. Rackham',
				content:
					'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.',
			},
			{
				title: 'It is a long established fact.',
				content:
					"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. ",
			},
			{
				title: 'Contrary to popular belief.',
				content:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form',
			},
			{
				title: 'Lorem Ipsum is simply dummy text.',
				content:
					' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
			},
			{
				title: 'The standard chunk of Lorem Ipsum used',
				content:
					"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
			},
		];

		const data = localStorage.getItem('post');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData);

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<main id='news' className='myScroll'>
			<h1>News</h1>
			<div className='wrapper'>
				{Posts.map((post, idx) => {
					if (idx >= 4) return;

					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				})}
			</div>
			<p className='decoTxt' style={{ transform: `translateX(${Scrolled - currentPos}px)` }}>
				RECENT NEWS
			</p>
		</main>
	);
}

export default News;
