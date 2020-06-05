import axios from 'axios';
import login from './login.js';

const dialogs = async (history, action = () => {}) => {
	try {
		const response = await axios.get(`http://127.0.0.1:4444/dialogs`, {
			withCredentials: true,
		});

		action((state) => {
			return {
				...state,
				data: response.data,
			};
		});
	}
	catch (err) {
		if (err.response.status === 401) {
			await login(history);
			await dialogs(history, action);
		}
	}
};

export default dialogs;
