import axios from 'axios';
import login from './login.js';

const users = async (action = () => {}) => {
	try {
		const split = document.cookie.split(';');
		const accessToken = split[0].split('accessToken=')[1];
		const response = await axios.get(`http://127.0.0.1:4444/users?accessToken=${accessToken}`);

		action((state) => {
			return {
				...state,
				data: response.data,
			};
		});
	}
	catch (err) {
		if (err.response.status === 401) {
			await login();
			await users(action);
		}
	}
};

export default users;
