import axios from 'axios';

const onSubmit = async (e, history) => {
	e.preventDefault();

	const { email, password } = e.currentTarget.elements;
	
	if (email && password) {
		try {
			const emailValue = email.value;
			const passwordValue = password.value;

			const responses = await axios.get(`http://127.0.0.1:4444/login?email=${emailValue}&password=${passwordValue}`);
			const { accessToken, refreshToken } = responses.data || {};

			document.cookie = `accessToken=${accessToken}`;
			document.cookie = `refreshToken=${refreshToken}`;

			history.push('/')
		}
		catch (err) {
		}
	}
};

export default onSubmit;
