import axios from 'axios';

const dialogs = async (action = () => {}) => {
	const response = await axios.get(`http://127.0.0.1:4444/dialogs`);

	action((state) => {
		return {
			...state,
			data: response.data,
		};
	});
};

export default dialogs;
