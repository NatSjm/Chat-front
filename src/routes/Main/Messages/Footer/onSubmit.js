import axios from 'axios';
import Socket from 'components/Socket';
import login from 'fetches/login.js';

const onSubmit = async (value, dialogId, action) => {
	const split = document.cookie.split(';');
	const accessToken = split[0].split('accessToken=')[1];


	if (value) {
		try {
			const response = await axios.post(`http://127.0.0.1:4444/messages/?accessToken=${accessToken}`, {
				user_id: 2,
				dialog_id: dialogId,
				body: value,
				id: Socket().id,
			});

			action((currentState) => {
				return {
					...currentState,
					data: [
						...currentState.data,
						{
							...response.data,
							me: true,
						},
					]
				}
			});
		}
		catch (err)
		{
			if (err.response.status === 401) {
				await login();
				await onSubmit(value, dialogId, action);
			}
		}
	}
};

export default onSubmit;

