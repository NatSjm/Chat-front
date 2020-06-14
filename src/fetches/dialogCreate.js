import axios from 'axios';
import login from './login.js';
//import Socket from 'components/Socket';

const dialogCreate =  async(name, users) => {
	const split = document.cookie.split(';');
	const accessToken = split[0].split('accessToken=')[1];

	if (name && users) {
		try{
		const response = await axios.post(`http://127.0.0.1:4444/dialogs?accessToken=${accessToken}`, {
			name,
			users
		});
		console.log(response);

	}
// 	action((currentState) => {
// 		return {
// 			...currentState,
// 			data: [
// 				...currentState.data,
// 				{
// 					...response.data,
// 					me: true,
// 				},
// 			]
// 		}
// 	});
//	}
	catch (err)
		{
			if (err.response.status === 401) {
				await login();
				await dialogCreate(name, users);
			}
		}
	}
};

export default dialogCreate;
