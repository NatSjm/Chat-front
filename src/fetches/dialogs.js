import axios from 'axios';
import login from './login.js';
import { dialogs as dialogsAction } from 'actions'

const dialogs = async (history, action = () => {}, currentAction = () => {}) => {
	try {
		const split = document.cookie.split(';');
		const accessToken = split[0].split('accessToken=')[1];
		const response = await axios.get(`http://127.0.0.1:4444/dialogs?accessToken=${accessToken}`);
		dialogsAction(response.data, action);
		currentAction(response.data[0]);
	}
	catch (err) {
		if (err.response && err.response.status === 401) {
			await login(history);
			await dialogs(history, action);
		}
	}
};

export default dialogs;
