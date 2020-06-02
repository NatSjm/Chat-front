import axios from 'axios';

const refreshTokens = () => {};
const dialogs = async (action = () => {}) => {
	try {
		const response = await axios.get(`http://127.0.0.1:4444/dialogs`);

		action((state) => {
			return {
				...state,
				data: response.data,
			};
		});
	}
	catch (err) {
		err.response.status === 401 && refreshTokens(err);
	}
};

export default dialogs;
