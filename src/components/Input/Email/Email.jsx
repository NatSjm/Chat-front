import React from 'react';
import Secondary from '../Secondary';

class Email extends React.Component {
	render = () => {
		return <Secondary type="email" placeholder="Введите email" />
	};
}

export default Email;
