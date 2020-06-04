import React from 'react';
import Secondary from '../Secondary';

class Password extends React.Component {
	render = () => {
		return <Secondary type="password" placeholder="Введите пароль" />
	};
}

export default Password;
