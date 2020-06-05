import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
	Password as InputPassword,
	Email as InputEmail,
} from 'components/Input';
import { Save as ButtonSave } from 'components/Button';
import Form from '../Form';
import onSubmitFunc from './onSubmit.js';

const Wrapper = styled(Form)`
	flex-direction: column;
	width: 440px;
`;

const Login = ({ confirmPassword, history }) => {
	const onSubmit = React.useCallback((e) => onSubmitFunc(e, history), [
		history,
	]);

	return <Wrapper onSubmit={onSubmit}>
		<InputEmail name="email" />
		<InputPassword name="password" />
		{confirmPassword 
			? <InputPassword 
				name="confirm_password"
				placeholder="Повторите пароль" />
			: <React.Fragment />}
		<ButtonSave type="submit">
			Войти
		</ButtonSave>
	</Wrapper>;
};

export default React.memo(withRouter(Login));
