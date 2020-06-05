import React from 'react';
import { Secondary as BlockSecondary } from 'components/Block';
import { Login as FormLogin } from 'components/Form';

const Register = () => {
	return <>
		<BlockSecondary>
			<FormLogin confirmPassword />
		</BlockSecondary>
	</>
};

export default Register;
