import axios from 'axios';

export const getYoutube = async () => {
	const key = 'AIzaSyCjKYbUcNseIkTsTgciA-Pkjzcm-_IjYdM';
	const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	return await axios.get(url);
};

export const getMembers = async () => {
	const url = process.env.PUBLIC_URL + '/DB/members.json';
	return await axios.get(url);
};

export const getFlickr = async (opt) => {
	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const key = 'ae5dbef0587895ed38171fcda4afb648';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	const num = 50;

	let url = '';

	if (opt.type === 'interest')
		url = `${baseURL}&method=${method_interest}&api_key=${key}&per_page=${num}`;
	if (opt.type === 'search')
		url = `${baseURL}&method=${method_search}&api_key=${key}&per_page=${num}&tags=${opt.tags}`;
	if (opt.type === 'user')
		url = `${baseURL}&method=${method_user}&api_key=${key}&per_page=${num}&user_id=${opt.user}`;

	return await axios.get(url);
};
