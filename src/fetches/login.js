import axios from 'axios';

const login = async (history, email, password) => {
	try {
		const splitTokens = document.cookie.split('refreshToken=');
		let queryString = '',
			props = {};

		if (email && password) {
			queryString = `?email=${email}&password=${password}`;
		}
		else if (splitTokens[1]) {
			props = { withCredentials: true };
		}

		const responses = await axios.get(`http://127.0.0.1:4444/login${queryString}`, props);
		const { accessToken, refreshToken } = responses.data || {};

		document.cookie = `accessToken=${accessToken}`;
		document.cookie = `refreshToken=${refreshToken}`;

		history.push('/');
	}
	catch (err) {
		console.log('err', err);
	}
};

export default login;
